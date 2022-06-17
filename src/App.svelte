<script lang="ts">
    import "@fontsource/montserrat";
    import Header from "./lib/Header.svelte";
    import ImageGallery from "./lib/ImageGallery.svelte";
    import Invitation from "./lib/Invitation.svelte";
    import Accomodation from "./lib/Accomodation.svelte";
    import Schedule from "./lib/Schedule.svelte";
    import Location from "./lib/Location.svelte";
</script>

<Header />
<Invitation />
<ImageGallery />
<Schedule />
<Location />
<Accomodation />

<style>
    :root {
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
    }

    :global(#app) {
        height: 100%;
    }

    :global(h1) {
        font-family: "Herr Von Muellerhoff", cursive;
    }
</style>
