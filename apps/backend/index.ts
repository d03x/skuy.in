import cors from "cors";
import router from "@/router";
import ctx from "@/core/ctx";
import { info } from "console";
import { log } from "./core/middleware/log";
const PORT = process.env.PORT || 5013;
//setup express middleware
ctx.http.use(cors());
ctx.http.use(ctx.rateLimiting());
ctx.http.use(log());
ctx.http.use(router);
ctx.server.listen(PORT, () => {
  ctx.logger.debug(`Server running at port [${PORT}]`);
});
