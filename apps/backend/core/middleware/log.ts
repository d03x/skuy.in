import chalk from "chalk";
import ctx from "../ctx";

export const log = () => {
  return (req: any, res: any, next: any) => {
    ctx.logger.info(`${req.method}|${req.url}`)
    next();
  };
};
