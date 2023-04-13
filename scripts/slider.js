const splide = new Splide(".splide", {
    start: 1,
    perPage: 1.5,
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
        }
    }
});

splide.mount();
