<script lang="ts">
    import "@fontsource/montserrat";
    import "@fontsource/herr-von-muellerhoff";

    import Header from "./lib/Header.svelte";
    import ImageGallery from "./lib/ImageGallery.svelte";
    import Invitation from "./lib/Invitation.svelte";
    import Accommodation from "./lib/Accommodation.svelte";
    import Timeline from "./lib/Timeline.svelte";
    import Location from "./lib/Location.svelte";
    import Afters from "./lib/Afters.svelte";
</script>

<Header />
<Invitation />
<ImageGallery />
<Timeline />
<Location />
<Accommodation />
<Afters />

<style>
    :root {
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
    }

    :global(h1) {
        font-family: "Herr Von Muellerhoff", cursive;
    }
</style>
