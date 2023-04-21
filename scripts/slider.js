const splide = new Splide(".splide", {
    // inView: autoplay,
    // start: 0,
    perPage: 2,
    perMove: 1,
    gap: 20,
    type: "loop",
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    // resetProgress: false,
    interval: 10000,
    drag: "free",
    snap: false,
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
