import { writable } from "svelte/store";

export const todos = writable([]);

export const addTodo = (text:string) => {
    todos.update( (cur) => {
        const newTodos = [...cur, { text, completed:false, id:Date.now()}];
        return newTodos
    })
}

export const deleteTodo = (id:number) => {
    todos.update( (cur) => {
        const newTodos = cur.filter( (todo) => todo.id !== id);
        return newTodos
    })
}