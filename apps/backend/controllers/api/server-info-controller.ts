import os from "os";
const controller = {
  get(req, res) {
    let system = {
      host: os.hostname(),
      uptime: os.uptime(),
      os: process.env.OS,
      osVersion: os.version(),
      memory: os.totalmem(),
      network_interface: os.networkInterfaces(),
    };
    res.json(system);
  },
} satisfies BaseController;

export default controller;
