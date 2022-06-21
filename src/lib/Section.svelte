<script type="ts">
    export let id: string;
    import texture from "../assets/noise.png";
</script>

<div {id} class="section" style="--background: url({texture})">
    <slot />
</div>

<style>
    .section {
        min-height: 100%;
        background-image: var(--background);
        padding-bottom: 48px;
        isolation: isolate;
        scroll-margin: 5rem;
    }
</style>
