import type { Request, Response } from "express";
import type { Context } from "./core/ctx";
enum HttpMethods {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
}
declare global {
  namespace process {
    interface env {
      DATABASE_URL: string;
      DEFAULT_PORT: number;
      COOKIE_NAME: string;
      SESSION_SECRET: string;
    }
  }
  interface BaseController extends Partial<Context> {
    get?: (req: Request, res: Response) => void;
    put?: (req: Request, res: Response) => void;
    patch?: (req: Request, res: Response) => void;
    delete?: (req: Request, res: Response) => void;
    post?: (req: Request, res: Response) => void;
  }
}
