<script>
    import Section from "./Section.svelte";
    import SectionHead from "./SectionHead.svelte";
    import { ELEVATIONS } from "../constants";
</script>

<Section>
    <SectionHead
        title="Location"
        background="https://images.unsplash.com/photo-1630609083938-3acb39a06392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        id="location"
        position="top"
    />

    <div class="text">
        <p>
            Our wedding is on Wednesday 28th September at Arundel Town Hall,
            Maltravers Street, Arundel, West Sussex BN18 9AP.
        </p>
        <p>Please arrive between 2:15 and 2:45 for a 3pm start.</p>
        <p>Parking can be a challenge in Arundel Town Center.</p>
        <p>
            There are 3 main car parks in Arundel, all within walking distance.
        </p>

        <ol>
            <li>Mill Road Car park - Opposite the entrance to the Castle</li>
            <li>Crown Yard Car park - round the back of Pizza Express</li>
            <li>Fitzalan Pool Car park - next to the Arundel Lido</li>
        </ol>

        <p>
            Also, all of London Road (by the Cathedral) and the road along the
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
                style="border:0"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz3PuIQawdUgRY-pdBBfHL1A&key=AIzaSyAPlbsI-LVWobl3CbFfYMPasPg7LcFmUmM"
                title="Google Maps of Arundel Town Hall"
            />
        </div>
        <div
            class="column"
            style="--small-elevation: {ELEVATIONS.small}; --large-elevation: {ELEVATIONS.large}"
        >
            <img
                src="https://live.staticflickr.com/3899/14844860232_79335e8eae_b.jpg"
                alt="arundel town hall reception room"
            />
        </div>
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

    .text {
        margin: auto;
        max-width: 50ch;
        text-align: center;
        font-size: 1.1rem;
        padding-block: 32px;
        padding-inline: 8px;
    }

    p {
        padding: 4px;
    }

    ol {
        text-align: left;
        padding: 8px;
        font-weight: 700;
    }

    li {
        padding: 4px;
    }
</style>
