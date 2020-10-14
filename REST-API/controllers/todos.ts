import { Todo } from "../model/todos.interface.ts";
import todoHelper from "../helper/todos.ts";

let todos: Todo[] = [];

function getAllTodos() {
    return todos;
}

function createTodo(text: string) {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text
    };
    todos.push(newTodo);
    return newTodo
}

function updateTodo(id: string, text: string) {

    todoHelper.findTodoIndexById(todos, id)

    todos = todos.map((t: Todo) => {
        if(t.id == id) {
            t.text = text
        }
        return t
    });
    const newTodo: Todo = {
        id, text

    }
    return newTodo
}

function deleteTodo(id: string) {
    todoHelper.findTodoIndexById(todos, id)
    todos = todos.filter((t: Todo) => t.id !== id);

}
 
export default {getAllTodos, createTodo, updateTodo,deleteTodo}

