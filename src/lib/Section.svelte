<script>
    import texture from "../assets/french-stucco.png";
</script>

<div class="section" style="--background: url({texture})">
    <slot />
</div>

<style>
    .section {
        min-height: 100%;
        background-image: var(--background);
    }
</style>
