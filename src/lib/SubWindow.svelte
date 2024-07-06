<script lang="ts">
    export let title: string = "";
    export let icon: string = "";
</script>

<div class="sub-window">
    <div class="sub-window__header">
        {#if icon}
            <img class="sub-window__icon" src="{icon}" alt=""/>
        {/if}
        {title}
    </div>
    <div class="sub-window__body">
        <slot name="body"></slot>
    </div>
    <div class="sub-window__footer">
        <slot name="footer"></slot>
    </div>
</div>

<style lang="scss">
    .sub-window {
        box-sizing: border-box;

        display: flex;
        flex-direction: column;

        height: 100%;
        width: 100%;

        font-size: var(--font-size-l);

        overflow-y: auto;

        border: 2px solid var(--color-blue);

        &__icon {
            height: var(--font-size-xl);
        }

        &__header {
            display: flex;
            align-items: center;
            gap: var(--spacing-m);

            padding: var(--spacing-m);

            min-height: 1rem;

            font-weight: bold;

            background-color: var(--color-blue);
        }

        &__body {
            /*padding: var(--spacing-s) var(--spacing-m);*/

            overflow: hidden;

            flex-grow: 1;
        }

        &__footer {
            padding: var(--spacing-xs) var(--spacing-m);
        }
    }
</style>
