<script type="ts">
    export let background: string;
    export let title: string;
    export let position = "center";

    import { headerHeight } from "../stores";

    // Clamp number between two values with the following line:
    const clamp = (num: number, min: number, max: number) =>
        Math.min(Math.max(num, min), max);

    const whenFadeStarts = 10;
    const whenFadeEnds = -50;
    const range = whenFadeEnds - whenFadeStarts;

    let element: HTMLElement;
    let y: number;
    let opacity = 1;

    $: if (element) {
        let relativePosition = element.offsetTop - y;
        let currentPosition = clamp(
            relativePosition,
            whenFadeEnds,
            whenFadeStarts
        );
        let percentChange = -(Math.abs(currentPosition - whenFadeEnds) / range);
        opacity = percentChange;
    }
</script>

<svelte:window bind:scrollY={y} />

<div
    bind:this={element}
    class="wrapper"
    style="
           --background: url({background});
           --position: {position};
           --height: {$headerHeight * -1}px"
>
    <div class="blur">
        <h2 style="--opacity: {opacity}">{title}</h2>
    </div>
</div>

<style>
    .wrapper {
        height: 10rem;
        width: 100%;
        background-image: var(--background);
        background-position: var(--position);
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
        display: grid;
        place-items: center;
        position: sticky;
        top: var(--height);
        margin-bottom: 32px;
        z-index: 1;
    }

    h2 {
        font-size: 4rem;
        font-family: "Herr Von Muellerhoff", cursive;
        font-weight: 400;
        opacity: var(--opacity);
    }

    .blur {
        width: fit-content;
        backdrop-filter: blur(10px);
        /* Vendor prefix for Safari: */
        -webkit-backdrop-filter: blur(10px);
        padding-inline: 16px;
        border-radius: 16px;
    }
</style>
