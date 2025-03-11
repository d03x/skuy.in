import serverInfoController from "@/controllers/api/server-info-controller";
import userController from "@controller/api/users-controller";
import ctx from "@/core/ctx";
ctx.router.get("/server-info", serverInfoController.get);
ctx.router.get('/users',userController.get);
export default ctx.router;
