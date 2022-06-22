<script>
    import Section from "./Section.svelte";
    import invite from "../assets/invite.png";
    import { ELEVATIONS } from "../constants";
</script>

<Section id="invitation">
    <div class="wrapper">
        <img
            src={invite}
            alt="wedding invitation"
            style="--small-elevation: {ELEVATIONS.small}; --large-elevation: {ELEVATIONS.large}"
        />
    </div>
</Section>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: calc(5rem + 8px);
        padding-inline: 8px;

    }

    img {
        margin-inline: 10px;
        object-fit: contain;
        aspect-ratio: 1 / 1.4142;
        width: 475px;
        border-radius: 2px;
        --shadow-color: 0deg 0% 50%;
        box-shadow: var(--large-elevation);
    }
</style>
