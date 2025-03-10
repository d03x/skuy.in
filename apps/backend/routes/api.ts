import serverInfoController from "@/controllers/api/server-info-controller";
import ctx from "@/core/ctx";
ctx.router.get("/server-info", serverInfoController.get);
ctx.router.get("/comments",(req,res)=>{
    ctx.websocket.on("connection",c=>{
        c.addEventListener("message",()=>{
            c.send("OKE")
        })
    })
})
export default ctx.router;
