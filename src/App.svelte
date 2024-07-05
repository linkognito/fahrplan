<script lang="ts">
  import StopSubWindow from "./lib/StopSubWindow.svelte"
  import requestedStops from "./stops.json"
</script>

<main>
  {#each requestedStops as requestedStop}
    <StopSubWindow stopId="{requestedStop.id}" fallbackTitle="{requestedStop.fallbackTitle}"/>
  {/each}
</main>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: var(--spacing-m);

    height: 100%;
    max-height: 100%;

    color: white;
    font-family: sans-serif;
  }
</style>
