<script>
    import texture from "../assets/noise.png";
</script>

<div id="gifts" style="--background: url({texture})">
    <div class="blur">
        <p>
            It is a delight to welcome you to our wedding, many of you traveling
            from afar.
        </p>
        <p>We do not expect gifts.</p>
        <p>Your presence is what is most important to us.</p>
    </div>
</div>

<style>
    #gifts {
        width: 100%;
        padding-block: 48px;
        background-image: url("https://images.unsplash.com/photo-1554755229-ca4470e07232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
    }

    .blur {
        width: fit-content;
        backdrop-filter: blur(10px);
        /* Vendor prefix for Safari: */
        -webkit-backdrop-filter: blur(10px);
        border-radius: 16px;
        margin: auto;
        padding: 16px;
    }

    p {
        font-size: 1.2rem;
        font-weight: 600;
        margin: auto;
        width: 100%;
        text-align: center;
    }
</style>
