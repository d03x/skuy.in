import ctx from "./core/ctx";
import routeAuth from "@route/auth";
import apiRoute from "@route/api";

ctx.router.get("/", (req, res) => {
  res.end("welcoome");
});
ctx.router.use("/api", apiRoute);
ctx.router.use("/auth", routeAuth);
//all

export default ctx.router;
