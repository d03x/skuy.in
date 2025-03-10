import ctx from "./core/ctx";
import routeAuth from "@/routes/auth";
import apiRoute from "@/routes/api";

ctx.router.get("/", (req, res) => {
  res.end("welcoome");
});
ctx.router.use("/api", apiRoute);
ctx.router.use("/auth",routeAuth);
//all

export default ctx.router;
