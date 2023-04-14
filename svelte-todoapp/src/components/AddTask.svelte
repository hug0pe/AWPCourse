<script>
  export let addTask;

  let input;
</script>

<!-- Todo -->
<input
  type="text"
  placeholder="Ajouter un todo"
  size="100"
  on:change={(e) => {
    input = e.target.value;
  }}
/>
<!-- Todo -->
<button on:click={() => addTask(input)}>Add Todo</button>
