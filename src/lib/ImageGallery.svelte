<script type="ts">
    import { JustifiedGrid } from "@egjs/svelte-grid";
    import Section from "./Section.svelte";
    import SectionHead from "./SectionHead.svelte";

    const gap = 5;
    const defaultDirection = "end";
    const rowRange = 0;
    const columnRange = [1, 8];
    const sizeRange = [200, 1000];
    const isCroppedSize = false;
    const displayedRow = -1;

    async function get() {
        const images = await import.meta.glob("../assets/photos/*.jpg");
        const imageDataPromises = Object.keys(images).map((path) =>
            images[path]()
        );
        const imageData = await Promise.all(imageDataPromises);
        const imageDataArray = imageData.map((element) => element.default);

        return imageDataArray;
    }
</script>

<Section>
    <SectionHead
        background="https://images.unsplash.com/photo-1629654857513-1136aef1b10f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1403&q=80"
        title="Image Gallery"
        id="photos"
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
                    <img class="image" src={image} alt="" />
                {/each}
            </JustifiedGrid>
        {/await}
    </div>
</Section>

<style>
    .wrapper {
        padding: 48px;
    }

    img {
        border-radius: 4px;
    }
</style>
