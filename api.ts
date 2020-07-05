import { Router } from "https://deno.land/x/oak@v5.3.1/mod.ts";

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

export default router;