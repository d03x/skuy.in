import Bun from "bun";
import path from "path";

import cp from "child_process";
Bun.build({
  entrypoints: ["./index.ts"],
  target: "node",
  minify: false,
  format: "esm",
  outdir: path.resolve(process.cwd(), "../../build/server"),
}).then((e) => {
  let output = path.resolve(process.cwd(), "../../build/server/index.js");
  let env = path.resolve(process.cwd(), "../../build/server/.env");
  let child = cp.spawn("node", ["-r", "dotenv/config",output], {
    env: { ...process.env, DOTENV_CONFIG_PATH: env },
    stdio: "pipe",
    shell: true,
    detached:true,
  });
  child.unref()
  console.log(e.outputs);
});
