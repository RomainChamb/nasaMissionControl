import { Application } from "https://deno.land/x/oak@v5.3.1/mod.ts";

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

app.use(async (ctx, next) => {
    ctx.response.body = `
                                                                 
888b      88         db         ad88888ba         db         
8888b     88        d88b       d8"     "8b       d88b        
88 \`8b    88       d8'\`8b      Y8,              d8'\`8b       
88  \`8b   88      d8'  \`8b     \`Y8aaaaa,       d8'  \`8b      
88   \`8b  88     d8YaaaaY8b      \`"""""8b,    d8YaaaaY8b     
88    \`8b 88    d8""""""""8b           \`8b   d8""""""""8b    
88     \`8888   d8'        \`8b  Y8a     a8P  d8'        \`8b   
88      \`888  d8'          \`8b  "Y88888P"  d8'          \`8b      

                    Mission Control API`;
await next();
});

if (import.meta.main) {
    await app.listen({
        port: PORT
    });
}
