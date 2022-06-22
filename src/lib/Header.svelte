<script type="ts">
    import texture from "../assets/noise.png";
    import MaterialSymbolsMenu from "~icons/material-symbols/menu";
    import MaterialSymbolsClose from "~icons/material-symbols/close";
    import sweetPea from "../assets/sweet_pea_watercolor.png";
    import { Dialog, DialogOverlay } from "@rgossiaux/svelte-headlessui";
    import { ELEVATIONS } from "../constants";
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";
    import { headerHeight, reducedMotion } from "../stores";
    import NavLink from "./NavLink.svelte";

    const delayInterval = 220;
    let isOpen = false;
    let h: number;
    onMount(() => headerHeight.set(h));

    function scrollTo(section: string) {
        console.log(section);
        var element = document.getElementById(section);
        element.scrollIntoView({
            behavior: $reducedMotion ? "auto" : "smooth",
            block: "start",
            inline: "start",
        });
    }

    function scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: $reducedMotion ? "auto" : "smooth",
        });
    }

    function mobileScrollTo(section: string) {
        isOpen = false;
        scrollTo(section);
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
        <NavLink title="gallery" />
        <NavLink title="timeline" />
        <NavLink title="location" />
        <NavLink title="accommodation" />
        <NavLink title="afters" />
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
        <DialogOverlay style={"height: 100%;"}>
            <div
                style={"background-color: rgb(0 0 0); opacity: 0.3; height: 100%;"}
                transition:fade={{ duration: 300 }}
            />
        </DialogOverlay>

        <div class="dialog-content" transition:fly={{ x: 200, duration: 500 }}>
            <div class="row close">
                <button on:click={() => (isOpen = false)}>
                    <MaterialSymbolsClose />
                </button>
            </div>

            <div class="row">
                <button
                    on:click={() => mobileScrollTo("gallery")}
                    class="mobile-link"
                    in:fade={{ delay: delayInterval * 1 }}
                >
                    Gallery
                </button>
                <button
                    on:click={() => mobileScrollTo("timeline")}
                    class="mobile-link"
                    in:fade={{ delay: delayInterval * 2 }}
                >
                    Timeline
                </button>
                <button
                    on:click={() => mobileScrollTo("location")}
                    class="mobile-link"
                    in:fade={{ delay: delayInterval * 3 }}
                >
                    Location
                </button>
                <button
                    on:click={() => mobileScrollTo("accommodation")}
                    class="mobile-link"
                    in:fade={{ delay: delayInterval * 4 }}
                >
                    Accommodation
                </button>
                <button
                    on:click={() => mobileScrollTo("afters")}
                    class="mobile-link"
                    in:fade={{ delay: delayInterval * 5 }}
                >
                    Afters
                </button>
            </div>

            <div class="row end">
                <img
                    in:fade={{ delay: delayInterval * 6.5 }}
                    class="mobile-decoration"
                    src={sweetPea}
                    alt="watercolor sweet pea"
                />
            </div>
        </div>
    </Dialog>
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        top: 0;
        padding: 1rem 30px;
        background-color: white;
        z-index: 2;
        background-image: var(--background);
        --shadow-color: 0deg 0% 50%;
        box-shadow: var(--small-elevation);
        background: hsl(0deg 0% 100% / 0.95);
    }

    @supports (backdrop-filter: blur(12px)) {
        /*
    The main experience, for Chrome/Safari users.
    Blurry backdrops.
  */
        nav {
            background: hsl(0deg 0% 100% / 0.5);
            backdrop-filter: blur(12px);
        }
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
        flex: 1;
        gap: 5px;
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
        position: relative;
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
        color: black;
        transition: color 500ms;
    }

    .tag:hover {
        color: #d1c3a9;
        transition: color 200ms;
        filter: saturate(12);
    }

    .dialog-content {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 75%;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 32px;
        align-items: center;
        border-radius: 1px;
    }

    .row {
        flex: 1;
    }

    .row.close {
        align-self: flex-end;
        transform: translate(18px, -18px);
    }

    .row > button {
        padding: 16px;
        text-transform: uppercase;
    }

    .row.end {
        align-self: center;
    }

    .mobile-decoration {
        transform: rotateZ(90deg) translateX(45%);
        width: 120px;
    }
</style>
