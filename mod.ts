import { Application, send } from "https://deno.land/x/oak@v5.3.1/mod.ts";

import api from "./api.ts";

const app = new Application();
const PORT = 8000;

app.use(async (ctx, next) => {
    await next();
    const time = ctx.response.headers.get("X-Response-Time");
    console.log(`Method: ${ctx.request.method},  url: ${ctx.request.url}, time: ${time}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${delta}ms`);
});

app.use(api.routes());
app.use(api.allowedMethods());

app.use(async (ctx) => {
    const filePath = ctx.request.url.pathname;
    const fileWhiteList = [
        "/index.html",
        "/javascripts/script.js",
        "/stylesheets/style.css",
        "/images/favicon.png"
    ];
    if (fileWhiteList.includes(filePath)) {
        await send(ctx, filePath, { root: `${Deno.cwd()}/public`});
    }
});

if (import.meta.main) {
    await app.listen({
        port: PORT
    });
}
