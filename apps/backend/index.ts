import cors from "cors";
import router from "@/router";
import ctx from "@/core/ctx";
import path from "path";
import { log } from "./core/middleware/log";
const PORT = process.env.PORT || 5013;
//setup express middleware
ctx.http.use(cors());

ctx.http.use(ctx.rateLimiting());
ctx.http.use(log());
ctx.http.use(router);
//must call after router middleware instance
ctx.http.use("*", (req, res) => {
  res.json({
    status: 404,
    message: "Not found",
  });
});
ctx.server.listen(PORT, () => {
  console.debug(`Server running at port [${PORT}]`);
});
