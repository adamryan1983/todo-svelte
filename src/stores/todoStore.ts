/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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

export const toggleTodo = (id:number) => {
    todos.update( cur => {
        const newTodos = cur.map( (todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        return newTodos
    })
}
