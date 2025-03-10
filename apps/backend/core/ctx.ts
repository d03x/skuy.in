import type { Express, Router } from "express";
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import session from "express-session";
import LoggerInstance from "@/core/libs/logger";
import type { BaseLogger } from "pino";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
class Context {
  http: Express;
  router: Router;
  server: http.Server;
  websocket: WebSocketServer;
  logger: BaseLogger;

  constructor() {
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
  }
  private sessionMiddleware() {
    return session({
      name : "epcookie",
      secret: "dadan12234!@#$",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
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
