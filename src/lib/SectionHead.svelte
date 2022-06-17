<script>
    export let background;
    export let title;
    export let id;
</script>

<div
    id={id}
    class="wrapper"
    style="--background: url({background})">
    <div class="blur">
        <h2>{title}</h2>
    </div>
</div>

<style>
    .wrapper {
        height: 10rem;
        width: 100%;
        background-image: var(--background);
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
        display: grid;
        place-items: center;
        position: relative;
        scroll-margin: 64px;
    }

    h2 {
        font-size: 4rem;
        font-family: "Herr Von Muellerhoff", cursive;
        font-weight: 400;
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
