<script>
    import Section from "./Section.svelte";
    import invite from "../assets/invite.png";
</script>

<Section id="invitation">
    <div class="wrapper">
        <img src={invite} alt="wedding invitation" />
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
        width: max(400px, 50%);
        border-radius: 2px;
        box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset;
    }
</style>
