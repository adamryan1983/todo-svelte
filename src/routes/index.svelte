<script>
  import TodoForm from '../components/TodoForm.svelte';
  import {todos} from '../stores/todoStore'
  import Todo from '../components/Todo.svelte';
</script>

<main>
  <h1 class="font-bold text-center text-gray-800 md text-3xl">My Todos</h1>
  <TodoForm />
  {#each $todos as todo}
    <Todo todo={todo} id={todo.id}/>
  {/each}
</main>


