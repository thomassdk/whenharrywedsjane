<script type="ts">
    import texture from "../assets/noise.png";
    import MaterialSymbolsMenu from "~icons/material-symbols/menu";
    import MaterialSymbolsClose from "~icons/material-symbols/close";
    import { Dialog, DialogOverlay } from "@rgossiaux/svelte-headlessui";
    import { ELEVATIONS } from "../constants";

    let isOpen = false;

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

    function scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
</script>

<nav
    bind:clientHeight={h}
    style="--background: url({texture});
           --small-elevation: {ELEVATIONS.small};
          "
>
    <div class="column">
        <button class="tag" on:click={() => scrollToTop()}
            >Harry weds Jane</button
        >
    </div>
    <div class="column laptop">
        <button on:click={() => scrollTo("photos")}>Gallery</button>
        <button on:click={() => scrollTo("schedule")}>Timeline</button>
        <button on:click={() => scrollTo("location")}>Location</button>
        <button on:click={() => scrollTo("accommodation")}>Accommodation</button
        >
        <button on:click={() => scrollTo("gifts")}>Gifts</button>
    </div>

    <div class="column">
        <div class="mobile-menu">
            <button on:click={() => (isOpen = true)}>
                <MaterialSymbolsMenu />
            </button>
        </div>
    </div>

    <Dialog
        open={isOpen}
        on:close={() => (isOpen = false)}
        style={"position: fixed; top: 0; right: 0; left: 0; bottom: 0; isolation: isolate;"}
    >
        <DialogOverlay
            style={"background-color: rgb(0 0 0); opacity: 0.3; height: 100%;"}
        />

        <div class="dialog-content">
            <button on:click={() => (isOpen = false)}>
                <MaterialSymbolsClose />
            </button>

            <button
                on:click={() => {
                    isOpen = false;
                    scrollTo("photos");
                }}>Gallery</button
            >
            <button on:click={() => scrollTo("schedule")}>Timeline</button>
            <button on:click={() => scrollTo("location")}>Location</button>
            <button on:click={() => scrollTo("accommodation")}>
                Accommodation
            </button>
            <button on:click={() => scrollTo("gifts")}>Gifts</button>
        </div>
    </Dialog>
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
        --shadow-color: 0deg 0% 50%;
        box-shadow: var(--small-elevation);
    }

    .mobile-menu {
        display: none;
    }

    @media (max-width: 950px) {
        .column.laptop {
            display: none;
        }
        .mobile-menu {
            display: flex;
            justify-content: flex-end;
            width: 100%;
        }
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

    .dialog-content {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 75%;
        background-color: white;
    }
</style>
