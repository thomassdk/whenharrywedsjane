<script>
    import Section from "./Section.svelte";
    import invite from "../assets/invite.png";
</script>

<Section>
    <div class="wrapper" id="invitation">
        <img src={invite} alt="wedding invitation" />
    </div>
</Section>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 48px;
    }

    img {
        margin-inline: 10px;
        object-fit: contain;
        width: 50%;
        border-radius: 2px;
        box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset;
    }
</style>
