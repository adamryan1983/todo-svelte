<script lang="ts">
  let count = 0;
  const increment = () => {
    count++;
  }
  const decrement = () => {
    count--;
  }
</script>

<button class="text-2xl bg-svelte-prime-900 text-sky-400 py-2 px-6 rounded shadow"
on:click="{increment}"
>
Add
</button>
<button
class="text-2xl bg-svelte-prime-900 text-sky-400 py-2 px-6 rounded shadow"
on:click="{decrement}"
>
Subtract
</button>

<h3>Clicks: {count}</h3>