import chalk from "chalk";
import ctx from "../ctx";

export const log = () => {
  return (req: any, res: any, next: any) => {
    console.debug(`${req.method}|${req.url}`)
    next();
  };
};
