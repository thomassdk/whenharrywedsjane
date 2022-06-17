<script>
    import invite from "../assets/invite.png";
    import texture from "../assets/french-stucco.png";
</script>

<div class="wrapper" id="invitation" style="--background: url({texture})">
    <img src={invite} alt="wedding invitation" />
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding-block: 20px;
        background-image: var(--background);
    }

    img {
        margin-inline: 10px;
        object-fit: contain;
        height: 100%;
        border-radius: 2px;
        box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset;
    }
</style>
