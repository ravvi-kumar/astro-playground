<script lang="ts">
  import { getState, subscribe } from "../store/counter.store";
  let svelteCount = 0;
  const { inc } = getState();
  const subscriber = subscribe((state) => {
    svelteCount = state.count;
  });
  function handleClick() {
    inc(1);
  }
</script>

<button on:click={handleClick}>
  Svelte: {svelteCount}
</button>
