<script type="ts">
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

<nav>
    <button on:click={() => scrollTo("photos")}>Photos</button>
    <button on:click={() => scrollTo("details")}>Details</button>
    <button on:click={() => scrollTo("locations")}>Location</button>
    <button on:click={() => scrollTo("accomodation")}>Accomodation</button>
    <button on:click={() => scrollTo("schedule")}>Schedule</button>
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        position: sticky;
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
