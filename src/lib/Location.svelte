<script>
    import Section from "./Section.svelte";
    import SectionHead from "./SectionHead.svelte";
    import { ELEVATIONS } from "../constants";
</script>

<Section id="location">
    <SectionHead
        title="Location"
        background="https://images.unsplash.com/photo-1630609083938-3acb39a06392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        position="top"
    />

    <div class="text">
        <p>
            Our wedding is on Wednesday 28th September at Arundel Town Hall,
            Maltravers Street, Arundel, West Sussex BN18 9AP.
        </p>
        <p>Please arrive between 2:15 and 2:45 for a 3pm start.</p>
        <p>There are three car parks in Arundel within walking distance.</p>

        <ol>
            <li>Mill Road Car park - Opposite the entrance to the Castle</li>
            <li>Crown Yard Car park - round the back of Pizza Express</li>
            <li>Fitzalan Pool Car park - next to the Arundel Lido</li>
        </ol>

        <p>
            Also all of London Road (by the Cathedral) and the road along the
            river is free of charge car parking all day if you can obtain a
            space.
        </p>
        <p>Hotels and accommodation will have their own parking.</p>
    </div>

    <div class="wrapper">
        <div
            class="column"
            style="--small-elevation: {ELEVATIONS.small}; --large-elevation: {ELEVATIONS.large}"
        >
            <iframe
                width="600"
                height="450"
                style="border:0;
                       --small-elevation: {ELEVATIONS.small};
                       --large-elevation: {ELEVATIONS.large}"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz3PuIQawdUgRY-pdBBfHL1A&key=AIzaSyAPlbsI-LVWobl3CbFfYMPasPg7LcFmUmM"
                title="Google Maps of Arundel Town Hall"
            />
        </div>
        <div class="column">
            <img
                style="--small-elevation: {ELEVATIONS.small}; --large-elevation: {ELEVATIONS.large}"
                src="https://www.pureyouphotography.com/lib/uploads/arundel-town-hall-west-sussex-wedding-photographer.jpeg"
                alt="arundel town hall reception room"
            />
        </div>
    </div>
    <div class="text">
        <p>
            There will be no professional photographer in attendance on the day.
        </p>
        <p>
            We ask that during the ceremony phones are “unplugged” but after the
            formalities are over, feel free to click away if you so desire.
        </p>
    </div>
</Section>

<style>
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
        max-width: 100%;
    }

    iframe {
        border-radius: 2px;
        --shadow-color: 0deg 0% 50%;
        box-shadow: var(--small-elevation);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        --shadow-color: 0deg 0% 50%;
        box-shadow: var(--small-elevation);
    }

    .text {
        margin: auto;
        max-width: 50ch;
        text-align: center;
        font-size: 1.1rem;
        padding-inline: 8px;
    }

    p {
        padding: 4px;
    }

    ol {
        text-align: left;
        padding: 16px;
        font-weight: 700;
    }

    li {
        list-style: inside;
        font-size: 0.8rem;
        padding: 4px;
    }
</style>
