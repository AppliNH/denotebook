import { Todo } from "../model/todos.interface.ts";

function findTodoIndexById(todos: Todo[], id: string) {
    const index = todos.findIndex((t: Todo) => t.id == id);
    if(index < 0) {
        throw new Error("Not found")
    }
    return index
}


export default {findTodoIndexById}