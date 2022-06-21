<script type="ts">
    import frame from "../assets/floral_frame_with_golden_leaves.png";
    export let title: string;

    function scrollTo(section: string) {
        console.log(section);
        var element = document.getElementById(section);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
        });
    }
</script>

<button
    on:click={() => scrollTo(title)}
    style="--frame: url({frame})"
    class="fancy-link"
>
    {title}
    <div class="frame">
        <img class="frame1" src={frame} alt="" />
        <img class="frame2" src={frame} alt="" />
    </div>
</button>

<style>
    button {
        display: block;
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
        text-align: left;
        font: inherit;
        color: inherit;
        width: max-content;
        position: relative;
        text-transform: capitalize;
    }

    button:focus {
        outline-offset: 2px;
    }

    button:focus:not(:focus-visible) {
        outline: none;
    }

    .fancy-link {
        padding: 2.5px 10px;
    }

    .frame {
        filter: saturate(3);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 1px solid #d1c3a9;
        border-radius: 1px;
        isolation: isolate;
        opacity: 0;
        transition: opacity 100ms;
    }

    .frame1 {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: rotateZ(-90deg) translate(-5%, -2.5%);
        height: 50%;
    }
    .frame2 {
        position: absolute;
        top: 0;
        right: 0;
        transform: rotateZ(90deg) translate(-2.5%, -2.5%);
        height: 50%;
    }

    @media not all and (hover: none) {
        .frame:hover {
            opacity: 1;
            transition: opacity 200ms;
        }
    }
</style>
