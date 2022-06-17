<script type="ts">
    import Section from "./Section.svelte";
    import SectionHead from "./SectionHead.svelte";
    import { ELEVATIONS } from "../constants";

    interface Hotel {
        name: string;
        image: string;
        url: string;
        deal: string;
        color: string;
    }

    const Hotels: Hotel[] = [
        {
            name: "Norfolk Arms Hotel",
            image: "https://www.norfolkarmsarundel.com/wp-content/uploads/2020/07/Pic-3.jpg",
            url: "https://www.norfolkarmsarundel.com/rooms/",
        },
        {
            name: "The White Swan",
            image: "https://rl-uk1.azureedge.net/picturemanager/images/PEBBARUN/DBM_HOTEL.jpg",
            url: "https://pebbarun.dbm.guestline.net/availability?hotel=PEBBARUN&arrival=2022-09-28&departure=2022-09-29&adults=2&children=0&filters[rates]=STAYC1N_DBB",
        },
        {
            name: "The Town House",
            image: "data:image/jpeg;base64,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",
            url: "https://direct-book.com/properties/thetownhousearundeldirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=GBP&checkInDate=2022-09-28&checkOutDate=2022-09-29&trackPage=yes",
        },
        {
            name: "House Arundel",
            image: "https://static.wixstatic.com/media/20b022_715f29fc676b4cf4908719c8b10713ef~mv2.jpg/v1/fit/w_552,h_620,q_90/20b022_715f29fc676b4cf4908719c8b10713ef~mv2.jpg",
            url: "https://www.housearundel.co.uk/book-your-bed",
        },
        {
            name: "The Swan Hotel",
            image: "https://www.swanarundel.co.uk/-/media/sites/microsites/s/the-swan-hotel-arundel-_-p232/images/2019/gallery/01-swan-arundel-2019-46.ashx",
            url: "https://direct-book.com/arundel/properties/SWANARUNDELDIRECT?locale=en&checkInDate=2022-09-28&numberNights=1&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=GBP&checkOutDate=2022-09-29&trackPage=yes",
            deal: "15% if booked through website or via call\nFST1845",
        },
    ];
</script>

<Section>
    <SectionHead
        background="https://images.unsplash.com/photo-1629654858857-615c2c8be8a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
        title="Accommodation"
        id="accomodation"
    />
    <div class="grid">
        {#each Hotels as hotel}
            <a href={hotel.url}>
                <article>
                    <h4>{hotel.name}</h4>
                    <figure>
                        <img src={hotel.image} alt={hotel.name} />
                        {#if hotel.deal}
                            <figcaption>{hotel.deal}</figcaption>
                        {/if}
                    </figure>
                </article>
            </a>
        {/each}
    </div>
</Section>

<style>
    .grid {
        padding: 32px;
        display: grid;
        gap: 32px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    article {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        border: solid 2px black;
        height: 350px;
        border-radius: 8px;
        padding: 8px 32px;
        transition: transform 500ms;
        will-change: transform;
    }

    article:hover {
        transform: scale(1.1);
        transition: transform 250ms;
    }

    img {
        border-radius: 8px;
    }

    figure {
        position: relative;
    }

    figcaption {
        position: absolute;
        bottom: 0;
        padding: 8px;
        overflow: hidden;
        width: 100%;
        backdrop-filter: blur(10px);
        /* Vendor prefix for Safari: */
        -webkit-backdrop-filter: blur(10px);
        color: white;
        text-align: center;
        border-radius: 0 0 8px 8px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
</style>
