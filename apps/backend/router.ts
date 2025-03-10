import ctx from "./core/ctx";
import routeAuth from "@/routes/auth"

ctx.router.get('/home',(req,res)=>{
    res.end("welcoome")
});

ctx.router.use(routeAuth);
export default ctx.router;