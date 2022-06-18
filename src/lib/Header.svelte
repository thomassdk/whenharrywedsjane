<script type="ts">
 import texture from "../assets/noise.png";

    let h: number;
    //TODO include header size into this scroll to
    function scrollTo(section: string) {
        var element = document.getElementById(section);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
</script>

<nav bind:clientHeight={h} style="--background: url({texture})">
    <div class="column">
        <button class="tag" on:click={() => scrollTo("invitation")}
            >Harry weds Jane</button
        >
    </div>
    <div class="column">
        <button on:click={() => scrollTo("photos")}>Image gallery</button>
        <button on:click={() => scrollTo("schedule")}>Wedding Timeline</button>
        <button on:click={() => scrollTo("location")}>Location</button>
        <button on:click={() => scrollTo("accomodation")}>Accomodation</button>
    </div>
    <div class="column" />
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        width: 100%;
        top: 0;
        padding: 1rem 30px;
        background-color: white;
        z-index: 1;
        background-image: var(--background);
    }

    .column {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        flex: 1;
    }

    button {
        display: block;
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
        text-align: left;
        font: inherit;
        color: inherit;
        width: max-content;
    }

    button:focus {
        outline-offset: 2px;
    }

    button:focus:not(:focus-visible) {
        outline: none;
    }

    .tag {
        font-family: "Herr Von Muellerhoff", cursive;
        font-size: 2rem;
    }
</style>
