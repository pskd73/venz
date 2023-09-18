# venz
Venz is a simple template for web based SaaS applications. It provides
1. A React web app - A pure client side app
2. A SSR + React based application - For landing, static and blog pages *(Todo)*

## React client app
It is under `web-app` subdirectory. It comes with following features out of the box without any extra setup It!
1. [Tailwind](https://tailwindcss.com/)
2. [Daisyui](https://daisyui.com/)

It by default runs on `bun`. You can boot it up as follows
1. Install `bun` from [here](https://bun.sh/docs/installation)
2. `cd web-app`
3. `bun install`
4. `bun start` - It runs the dev server in watch mode
5. `bun run build` - To build production bundle. Stores the output under `build` subdirectory
