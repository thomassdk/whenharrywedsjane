<script type="ts">
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

<nav bind:clientHeight={h}>
    <button on:click={() => scrollTo("invitation")}>Invitation</button>
    <button on:click={() => scrollTo("photos")}>Image gallery</button>
    <button on:click={() => scrollTo("schedule")}>Wedding Timeline</button>
    <button on:click={() => scrollTo("location")}>Location</button>
    <button on:click={() => scrollTo("accomodation")}>Accomodation</button>
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        position: fixed;
        width: 100%;
        top: 0;
        padding-block: 1rem;
        background-color: white;
        z-index: 1;
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
    }

    button:focus {
        outline-offset: 2px;
    }

    button:focus:not(:focus-visible) {
        outline: none;
    }
</style>
