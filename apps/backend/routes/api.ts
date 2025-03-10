import serverInfoController from "@/controllers/api/server-info-controller";
import ctx from "@/core/ctx";
ctx.router.get("/server-info", serverInfoController.get);
export default ctx.router;
