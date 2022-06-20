<script type="ts">
    import Section from "./Section.svelte";
    import SectionHead from "./SectionHead.svelte";
    import sweetPea from "../assets/sweet_pea_watercolor.png";

    function formatTime(date: Date) {
        return date.toLocaleString("en-us", {
            hour: "numeric",
            minute: "2-digit",
        });
    }

    const Events = [
        {
            date: new Date("2022-09-28T14:15:00"),
            text: "Guests begin arriving",
        },
        {
            date: new Date("2022-09-28T15:00:00"),
            text: "Ceremony begins",
        },
        {
            date: new Date("2022-09-28T15:50:00"),
            text: "Champagne & Canapés on roof terrace",
        },
        {
            date: new Date("2022-09-28T17:15:00"),
            text: "Wedding Feast commences",
        },
        {
            date: new Date("2022-09-28T18:30:00"),
            text: "Speeches & Toasts",
        },
        {
            date: new Date("2022-09-28T19:30:00"),
            text: "Move downstairs to dance floor",
        },
        {
            date: new Date("2022-09-28T20:00:00"),
            text: "Cake Cut & First Dance",
        },
        {
            date: new Date("2022-09-28T20:30:00"),
            text: "Dancing until 11 pm",
        },
        {
            date: new Date("2022-09-28T23:00:00"),
            text: "Farewell to the Bride and Groom",
        },
    ];
</script>

<Section>
    <SectionHead
        title="Timeline"
        background="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80"
        id="schedule"
    />
    <div class="schedule" style="--divider: url({sweetPea})">
        {#each Events as event}
            <div class="event">
                <h3>{event.text}</h3>
                <h4>
                    {formatTime(event.date)}
                </h4>
            </div>
        {/each}
    </div>
    <div class="note">
        <p>
            It is a delight to welcome you to our wedding, many of you traveling
            from afar.
        </p>
        <p>We do not expect gifts.</p>
        <p>Your presence is what is most important to us.</p>
    </div>
</Section>

<style>
    .event {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 12px;
        text-transform: uppercase;
    }

    .event:not(:first-of-type)::after {
        background-image: var(--divider);
        display: inline-block;
        width: 120px;
        height: 60px;
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: contain;
        content: "";
    }

    .event:nth-child(1n)::after {
        transform: rotateZ(-90deg) rotateY(180deg);
    }

    .event:nth-child(2n)::after {
        transform: rotateZ(90deg);
    }

    .schedule {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 48px 16px;
        position: relative;
    }

    h4 {
        font-style: italic;
        font-weight: 200;
        text-align: center;
    }

    h3 {
        text-align: center;
    }

    .note {
        max-width: 50ch;
        font-size: 0.9rem;
        font-weight: 200;
        margin: auto;
        width: 100%;
        text-align: center;
        padding-top: 20px;
        line-height: 1.75;
        padding-inline: 16px;
    }

    .note p:first-child::before {
        content: "*";
        font-weight: 700;
    }
</style>
