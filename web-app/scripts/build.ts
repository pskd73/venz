const publicFiles = () => {
  Bun.spawnSync(["rm", "-rf", "./build"]);
  Bun.spawnSync(["mkdir", "./build"]);
  Bun.spawnSync(["cp", "-r", "./public/index.html", "./build"]);
};

const build = async () => {
  console.log("Building");
  await Bun.build({
    entrypoints: ["./src/index.tsx"],
    outdir: "./build",
    minify: true
  });
};

const tailwind = async () => {
  await Bun.spawn([
    "bun",
    "./node_modules/.bin/tailwindcss",
    "-i",
    "./src/style.css",
    "-o",
    "./build/style.css",
  ]);
};

await publicFiles();
await build();
await tailwind();
