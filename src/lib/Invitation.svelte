<script>
    import invite from "../assets/invite.png";
</script>

<div class="wrapper" id="invitation">
    <img src={invite} alt="wedding invitation" />
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding-block: 20px;
    }
    img {
        padding-inline: 10px;
        object-fit: contain;
        height: 100%;
        border-radius: 2px;
        box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset;
    }
</style>
