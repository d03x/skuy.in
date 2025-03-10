import type { Express, Router } from "express";
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import LoggerInstance from "@/core/libs/logger";
import type { BaseLogger } from "pino";
import rateLimit from "express-rate-limit";
class Context {
  http: Express;
  router: Router;
  server: http.Server;
  websocket: WebSocketServer;
  logger: BaseLogger;
  constructor() {
    this.logger = LoggerInstance;
    this.http = express();
    this.router = express.Router();
    this.server = http.createServer(this.http);
    this.websocket = new WebSocketServer({ server: this.server });
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
