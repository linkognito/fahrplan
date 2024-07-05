<script lang="ts">
    import * as dvb from "dvbjs";
    import type {IMonitor, IPoint} from "dvbjs";

    import SubWindow from "./SubWindow.svelte";
    import {onMount} from "svelte";
    import ScrollableList from "./StopTimeTable.svelte";
    import stopIcon from "../assets/haltestelle.svg";

    export let stopId: string;
    export let fallbackTitle: string;

    let stopInfo: IPoint;
    let stopDepartures: IMonitor[];

    const updateDepartures = () => {
        dvb.monitor(
            stopId,
            undefined,
            5,
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
    icon="{stopIcon}">
    <ScrollableList slot="body" departures="{stopDepartures ?? []}"/>
</SubWindow>
