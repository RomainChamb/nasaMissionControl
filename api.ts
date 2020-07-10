import { Router } from "https://deno.land/x/oak@v5.3.1/mod.ts";

import * as planets from "./models/planets.ts";
import * as launches from "./models/launches.ts";

const router = new Router();

router.get("/", (ctx) => {
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
});

router.get("/planets", (ctx) => {
    ctx.response.body = planets.getAllPlanets();
});

router.get("/launches", (ctx) => {
    ctx.response.body = launches.getAll();
});

router.get("/launches/:id", (ctx) => {
    try {
        if (ctx.params?.id) {
            ctx.response.body = launches.getOne(Number(ctx.params.id));
        } else {
            ctx.throw(400, "Bad request");
        }
    } catch (err) {
        ctx.throw(404, "Launch with that id doesn't exist.");
    }
    
});

router.post("/launches", async (ctx) => {
    const body = await ctx.request.body();
    launches.addOne(body.value);
    ctx.response.body = { success : true};
    ctx.response.status = 201;
});

router.delete("/launches/:id", (ctx) => {
    try {
        if (ctx.params?.id) {
            const result = launches.removeOne(Number(ctx.params.id));
            ctx.response.body = { success: result }
        } else {
            ctx.throw(400, "Bad request.");
        }
    } catch (err) {
        ctx.throw(404, "Launch with that id doesn't exist.");
    }
});

export default router;