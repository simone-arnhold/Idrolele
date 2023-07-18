// hero splide
const heroSplide = new Splide("#hero__splide", {
    perPage: 4,
    perMove: 1,
    gap: 20,
    type: "loop",
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: true,
    resetProgress: true,
    interval: 15000,
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

        1280: {
            perPage: 2,
        },

        768: {
            mediaQuery: "min",
            perPage: 1,
            gap: 10,
            snap: true,
            fixedWidth: "70vw",
            focus: "center",
        }
    }
});

heroSplide.mount();

// testimonial splide
const testimonialSplide = new Splide("#testimonial__splide", {
    // inView: autoplay,
    // start: 0,
    perPage: 4,
    perMove: 1,
    gap: 50,
    type: "loop",
    autoWidth: true,
    // autoplay: true,
    // pauseOnHover: false,
    // pauseOnFocus: true,
    // resetProgress: true,
    // interval: 15000,
    drag: "free",
    snap: false,
    arrows: true,
    pagination: true,
    rewind: true,
    rewindByDrag: true,
    lazyLoad: true,
    padding: "5rem",
    // width: "100vw",


    // Responsive breakpoint
    breakpoints: {
        768: {
            perPage: 2,
            snap: true,
            // width: "100vw",
            gap: 20,
            focus: "center",
        }
    }
});

testimonialSplide.mount()