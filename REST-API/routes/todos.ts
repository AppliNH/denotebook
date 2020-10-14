import { Router } from "https://deno.land/x/oak/mod.ts";
import todoController from "../controllers/todos.ts";


const router = new Router();

router.get('/todos', (ctx) => {
    const todos = todoController.getAllTodos()
    ctx.response.body = { todos }
});

router.post('/todos', async (ctx) => {
    const {value} = ctx.request.body({type: "json"});
    const {text} = await value;
    const todo = todoController.createTodo(text);

    ctx.response.body = { message: "Created !", todo}
});


router.put('/todos/:todoId', async (ctx) => {
    const todoId = ctx.params.todoId;
    if(todoId != undefined) {
        const {value} = ctx.request.body({type: "json"});
        const {text} = await value;
        try {
            const todo = todoController.updateTodo(todoId, text);
            ctx.response.body = {error:false, message: "Updated todo", todo}
        } catch(_e) {
            let e:Error= _e;
            ctx.response.body = {error:true, message: e.message}
        }
    } else {
        ctx.response.body = {error:true,message: "Error: not todo Id has been provided"}
    }



});

router.delete('/todos/:todoId', (ctx) => {
    const todoId = ctx.params.todoId;
    if(todoId != undefined) { 
        try {
            const todo = todoController.deleteTodo(todoId);
            ctx.response.body = {error:false, message: "Deleted todo", todoId}
        } catch(_e) {
            let e:Error= _e;
            ctx.response.body = {error:true, message: e.message}
        }
    } else {
        ctx.response.body = {error:true,message: "Error: not todo Id has been provided"}
    }


});

export default router;