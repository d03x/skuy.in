import type { Request, Response } from "express";
enum HttpMethods {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
}
declare global {
  interface BaseController {
    get?: (req: Request, res: Response) => void;
    put?: (req: Request, res: Response) => void;
    patch?: (req: Request, res: Response) => void;
    delete?: (req: Request, res: Response) => void;
    post?: (req: Request, res: Response) => void;
  }
}
