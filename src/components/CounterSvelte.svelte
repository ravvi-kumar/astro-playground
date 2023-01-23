<script>
  import { afterUpdate } from "svelte";
  import { getState } from "../store/counter.store";
  let svelteCount = 0;
  function handleClick(event) {
    const { count, inc } = getState();
    inc(1);
    svelteCount = count;
  }
</script>

<button on:click={handleClick}>
  Svelte: {svelteCount}
</button>
