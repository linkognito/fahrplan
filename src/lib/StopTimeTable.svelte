<script lang="ts">
    import type {IMonitor} from "dvbjs";

    export let departures: IMonitor[];
</script>

<table class="timetable">
    {#each departures as departure}
        <tr class="timetable__item">
            <td class="timetable__line">
                {departure.line}
            </td>
            <td>
                {departure.direction}
            </td>
            <td>
                {departure.platform?.type} {departure.platform?.name}
            </td>
            <td class="timetable__arrival">
                {departure.arrivalTimeRelative}
            </td>
        </tr>
    {/each}
</table>

<style lang="scss">
    .timetable {
        width: 100%;

        border-collapse: collapse;

        &__item {
            :nth-child(2n) {
                background: var(--color-dark-blue);
            }

            td {
                padding-block: var(--spacing-m);

                &:first-of-type {
                    padding-left: var(--spacing-m);
                }

                &:last-of-type {
                    padding-right: var(--spacing-m);
                }
            }
        }

        &__line {
            width: 4ch;
        }

        &__arrival {
            width: 4ch;

            text-align: right;
        }
    }
</style>
