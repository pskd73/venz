import serveStatic from "serve-static-bun";
import { watch } from "fs";

const publicFiles = () => {
  Bun.spawnSync(["rm", "-rf", "./build"]);
  Bun.spawnSync(["mkdir", "./build"]);
  Bun.spawnSync(["cp", "-r", "./public/index.html", "./build"]);
};

const build = async () => {
  console.log("Rebuilding..");
  await Bun.build({
    entrypoints: ["./src/index.tsx"],
    outdir: "./build",
  });
  tailwind();
};

const tailwind = () => {
  Bun.spawn([
    "bun",
    "./node_modules/.bin/tailwindcss",
    "-i",
    "./src/style.css",
    "-o",
    "./build/style.css",
  ]);
};

const watcher = watch("./src", { recursive: true }, build);

await publicFiles();
await build();

Bun.serve({ port: 3000, fetch: serveStatic("build") });
