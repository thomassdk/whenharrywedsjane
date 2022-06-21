<script type="ts">
    import { JustifiedGrid } from "@egjs/svelte-grid";
    import Section from "./Section.svelte";
    import SectionHead from "./SectionHead.svelte";
    import { ELEVATIONS } from "../constants";

    const gap = 6;
    const defaultDirection = "end";
    const rowRange = 0;
    const columnRange = [1, 8];
    const sizeRange = [200, 1000];
    const isCroppedSize = false;
    const displayedRow = -1;

    async function get() {
        const images = import.meta.glob("../assets/photos/*.jpg");
        const imageDataPromises = Object.keys(images).map((path) =>
            images[path]()
        );
        const imageData = await Promise.all(imageDataPromises);
        const imageDataArray = imageData.map((element) => element.default);

        return imageDataArray;
    }
</script>

<Section id="gallery">
    <SectionHead
        background="https://images.unsplash.com/photo-1629654857513-1136aef1b10f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1403&q=80"
        title="Image Gallery"
    />
    <div class="wrapper">
        {#await get()}
            <p>Waiting</p>
        {:then images}
            <JustifiedGrid
                {defaultDirection}
                {gap}
                {rowRange}
                {columnRange}
                {sizeRange}
                {isCroppedSize}
                {displayedRow}
            >
                {#each images as image}
                    <img
                        src={image}
                        alt=""
                        style="--small-elevation: {ELEVATIONS.small}; --large-elevation: {ELEVATIONS.large}"
                    />
                {/each}
            </JustifiedGrid>
        {/await}
    </div>
</Section>

<style>
    .wrapper {
        padding-inline: clamp(6px, 6.1vw - 1.75rem, 48px);
    }

    img {
        border-radius: 4px;
        --shadow-color: 0deg 0% 50%;
        box-shadow: var(--small-elevation);
    }
</style>
