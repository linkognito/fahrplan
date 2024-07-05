<script lang="ts">
    import type {IMonitor} from "dvbjs";

    export let departures: IMonitor[];
</script>

<table class="scrollable-list">
    {#each departures as departure}
        <tr class="scrollable-list__item">
            <td>
                {departure.line}
            </td>
            <td>
                {departure.direction}
            </td>
            <td>
                {departure.platform?.type} {departure.platform?.name}
            </td>
            <td style="text-align: right;">
                {departure.arrivalTimeRelative}
            </td>
        </tr>
    {/each}
</table>

<style>
    .scrollable-list {
        width: 100%;

        border-collapse: collapse;
    }

    .scrollable-list__item td {
        padding-block: var(--spacing-m);
    }

    .scrollable-list__item td:first-of-type {
        padding-left: var(--spacing-m);
    }

    .scrollable-list__item td:last-of-type {
        padding-right: var(--spacing-m);
    }

    .scrollable-list__item:nth-child(2n) {
        background: var(--color-dark-blue);
    }
</style>
