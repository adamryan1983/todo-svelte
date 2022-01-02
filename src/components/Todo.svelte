<script>
import Count from "$lib/Count.svelte";

  import { deleteTodo, toggleTodo} from '../stores/todoStore';
  export let todo;
  export let id;
</script>

<div class="flex justify-between items-center p-4 border-b border-gray-300">
  <div class="flex items-center">
    <input type="checkbox" class="form-checkbox" checked={todo.completed} on:change={() => toggleTodo(todo.id)}/>
  </div>
  <span class={`flex-1 text-gray-800 px-2 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
  <button class="text-red-500" on:click={() => deleteTodo(todo.id)}>Delete</button>
</div>