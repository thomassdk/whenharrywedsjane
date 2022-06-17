<script type="ts">
    import { JustifiedGrid } from "@egjs/svelte-grid";

    const gap = 5;
    const defaultDirection = "end";
    const rowRange = 0;
    const columnRange = [1, 8];
    const sizeRange = [200, 1000];
    const isCroppedSize = false;
    const displayedRow = -1;

    let grid;
    let masonry;

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

<div class="wrapper">
    <h2>Photos</h2>
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

<style>
    .wrapper {
        padding: 40px;
    }

 h2 {
     text-align: center;
 }
</style>
