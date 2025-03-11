import type { Express, Router } from "express";
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import session from "express-session";
import dotenv from "dotenv";
import LoggerInstance from "@/core/libs/logger";
import type { BaseLogger } from "pino";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import path from "path";
export class Context {
  http: Express;
  router: Router;
  server: http.Server;
  websocket: WebSocketServer;
  logger: BaseLogger;
  db: PostgresJsDatabase;
  env: any;
  constructor() {
    this.loadEnv();
    this.logger = LoggerInstance;
    this.http = express();
    this.router = express.Router({
      strict: true,
      caseSensitive: true,
    });
    //static files from folder
    this.http.use(express.static("public"));
    //create http server using node http
    this.http.use(cookieParser());
    this.http.use(this.sessionMiddleware());
    this.server = http.createServer(this.http);
    //for websocket configuration
    this.websocket = new WebSocketServer({ server: this.server });
    this.env = process.env;
    this.db = this.configureDB();
  }
  private configureDB() {
    return drizzle(
      postgres(this.env.DATABASE_URL!, {
        prepare: false,
      })
    );
  }
  private loadEnv() {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env"),
    });
    console.info("Loading Dot env");
  }
  private sessionMiddleware() {
    return session({
      name: this.env.SESSION_NAME!,
      secret: this.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: this.env.IS_DEV ? true : false },
    });
  }
  /**
   * rateLimiting
   */
  public rateLimiting() {
    return rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 100,
    });
  }
}

export default new Context();
