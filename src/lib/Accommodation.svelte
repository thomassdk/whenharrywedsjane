<script type="ts">
    import Section from "./Section.svelte";
    import SectionHead from "./SectionHead.svelte";

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
            name: "House Arundel",
            image: "https://static.wixstatic.com/media/20b022_715f29fc676b4cf4908719c8b10713ef~mv2.jpg/v1/fit/w_552,h_620,q_90/20b022_715f29fc676b4cf4908719c8b10713ef~mv2.jpg",
            url: "https://www.housearundel.co.uk/book-your-bed",
        },
        {
            name: "The Swan Hotel",
            image: "https://www.swanarundel.co.uk/-/media/sites/microsites/s/the-swan-hotel-arundel-_-p232/images/2019/gallery/01-swan-arundel-2019-46.ashx",
            url: "https://direct-book.com/arundel/properties/SWANARUNDELDIRECT?locale=en&checkInDate=2022-09-28&numberNights=1&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=GBP&checkOutDate=2022-09-29&trackPage=yes",
            deal: "15% with code - FST1845",
        },
        {
            name: "Comfort Inn",
            image: "https://www.choicehotels.com/hotelmedia/GB/EN/arundel/GB642/480/GB642EXTERIOR03_1.webp",
            url: "https://www.choicehotels.com/en-uk/united-kingdom/arundel/comfort-inn-hotels/gb642/rates?checkInDate=2022-09-28&checkOutDate=2022-09-29",
            deal: "5% discount",
        },
        {
            name: "Arundel Park Hotel",
            image: "https://exp.cdn-hotels.com/hotels/46000000/45710000/45708200/45708154/03855591_z.jpg?impolicy=fcrop&w=773&h=530&q=high",
            url: "https://secure.hotels.uk.com/bookings/#/booking/11435/items/availability?from=2022-09-28&to=2022-09-29&k=BYLVbIgpoc01yRAJUtPZTIK66",
        },
    ];
</script>

<Section id="accommodation">
    <SectionHead
        background="https://images.unsplash.com/photo-1629654858857-615c2c8be8a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
        title="Accommodation"
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

    <div class="text">
        <h4>Taxis</h4>
        <p>
            Castle Cars:
            <a href="tel:01903-884444">01903-884444</a> or
            <a href="tel:01903-889988">01903-889988</a>
        </p>
        <p>
            Apollo Taxis:
            <a href="tel:01903-723030">01903-723030</a>
        </p>
    </div>
</Section>

<style>
    .grid {
        --minSize: 200px;
        margin: auto;
        max-width: calc(calc(var(--minSize) * 3) + calc(32px * 3));
        padding-inline: 16px;
        display: grid;
        gap: 32px;
        grid-template-columns: repeat(auto-fit, minmax(var(--minSize), 1fr));
    }

    .grid > a {
        color: inherit;
        text-decoration: none;
    }

    .grid > a:hover {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    article {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        border: solid 2px black;
        height: 250px;
        border-radius: 8px;
        padding: 8px 32px;
        transition: transform 500ms;
        will-change: transform;
    }

    @media not all and (hover: none) {
        article:hover {
            transform: scale(1.1);
            transition: transform 250ms;
        }
    }

    img {
        border-radius: 8px;
    }

    figure {
        position: relative;
        overflow: hidden;
        border-radius: 0 0 8px 8px;
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
    }

    .text {
        margin: auto;
        max-width: 50ch;
        text-align: center;
        font-size: 1.1rem;
        padding-top: 32px;
        padding-inline: 8px;
        line-height: 2;
    }

    h4 {
        font-size: 1.2rem;
    }
</style>
