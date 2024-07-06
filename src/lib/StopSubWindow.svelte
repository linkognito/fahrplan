<script lang="ts">
    import type {IMonitor, IPoint} from "dvbjs";
    import * as dvb from "dvbjs";

    import SubWindow from "./SubWindow.svelte";
    import {onMount} from "svelte";
    import ScrollableList from "./StopTimeTable.svelte";
    import stopIconUrl from "../assets/haltestelle.svg";

    export let stopId: string;
    export let fallbackTitle: string;
    export let departureCount: number = 5;

    let stopInfo: IPoint;
    let stopDepartures: IMonitor[];

    const updateDepartures = () => {
        dvb.monitor(
            stopId,
            undefined,
            departureCount,
        ).then(data => {
            stopDepartures = data;
        });
    };

    onMount(async () => {
        const data = await dvb.findStop(stopId);
        stopInfo = data[0];

        updateDepartures();

        setInterval(() => {
            updateDepartures();
        }, 10000);
    });
</script>

<SubWindow
    title="{stopInfo?.name ?? fallbackTitle}"
    icon="{stopIconUrl}">
    <ScrollableList slot="body" departures="{stopDepartures ?? []}"/>
</SubWindow>
