import ctx from "@/core/ctx";
import os from "os";
ctx.router.get("/server-info", (req, res) => {
  let system = {
    host: os.hostname(),
    uptime: os.uptime(),
    os: process.env.OS,
    osVersion: os.version(),
    memory: os.totalmem(),
    network_interface: os.networkInterfaces(),
  };
  res.json(system);
});
export default ctx.router;
