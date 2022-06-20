<script>
    import Section from "./Section.svelte";
    import SectionHead from "./SectionHead.svelte";
    import JackieView from "../assets/jackie_view.jpg";
    import WetSuits from "../assets/wetsuit_portrait.jpg";
</script>

<Section id="after">
    <SectionHead
        title="Ever the day after"
        background="https://images.unsplash.com/photo-1554755229-ca4470e07232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    />

    <div class="text">
        <p>You are invited to put a sociable end to our celebrations.</p>
        <p>
            Please stay on in Sussex for a while longer and join us from 1pm
            onwards for a get together by the seaside.
        </p>
        <p>
            Food, refreshment, swimming in sea or pool, water sports, or just
            walking the beach and a chat.
        </p>
        <p>Bring warm clothes just in case, wet suit if desired.</p>
        <p>RSVP by end of August.</p>
    </div>

    <div class="wrapper">
        <div class="column">
            <iframe
                width="600"
                height="450"
                style="border:0"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?q=Angmering%20lodge%20South%20strand%20%20East%20Preston%20West%20Sussex%20%20BN161PW&key=AIzaSyAPlbsI-LVWobl3CbFfYMPasPg7LcFmUmM"
                title="Jackie & Steve's Location"
            />
        </div>
        <div class="column">
            <img src={JackieView} alt="View from Jackies" />
        </div>
        <div class="column">
            <img src={WetSuits} alt="A wetsuit portrait of the happy couple" />
        </div>
    </div>
</Section>

<style>
    .text {
        margin: auto;
        max-width: 50ch;
        text-align: center;
        font-size: 1.1rem;
        padding-inline: 8px;
        padding-bottom: 16px;
    }

    p {
        padding: 4px;
    }

    .wrapper {
        display: flex;
        padding: 16px;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
        max-width: 100%;
    }

    .column {
        flex: 0 1 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 450px;
        width: 600px;
        --shadow-color: 0deg 0% 50%;
        box-shadow: var(--small-elevation);
        max-width: 100%;
    }

    iframe {
        border-radius: 2px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
</style>
