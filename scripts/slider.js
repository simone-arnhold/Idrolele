const splide = new Splide(".splide", {
    // start: 0,
    perPage: 2,
    perMove: 1,
    gap: 20,
    type: "loop",
    drag: "free",
    snap: false,
    interval: 3000,
    arrows: true,
    pagination: true,
    rewind: true,
    rewindByDrag: true,
    lazyLoad: true,
    padding: "5rem",

    // Responsive breakpoint
    breakpoints: {
        768: {
            perPage: 1,
            snap: true,
            width: "100vw",
        }
    }
});

splide.mount();
