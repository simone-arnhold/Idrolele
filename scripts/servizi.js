document.addEventListener("DOMContentLoaded", function (event) {

    const blocchi = document.querySelectorAll(".blocco-interattivo")
    const descrizioniServizi = document.querySelectorAll(".descrizione-servizi")
    let index = 2 // start value, chiaveingl

    console.log("blocchi: ", blocchi)
    console.log("servizi: ", descrizioniServizi)

    // // vecchia versione
    // blocchi.forEach(element => {
    //     element.addEventListener("mouseover", () => {
    //         // remove all hover tags
    //         descrizioniServizi.forEach(element => {
    //             element.classList.remove("selected")
    //             blocchi.forEach(element => {
    //                 element.classList.remove("selected")
    //             })
    //         })
    //         index = Array.from(blocchi).indexOf(element)
    //         element.classList.add("selected")
    //         descrizioniServizi[index].classList.add("selected")
    //         console.log("current index: ", index)
    //         // order:
    //         // #pennello
    //         // #martello
    //         // #chiaveingl
    //         // #lavandino
    //         // #stur
    //         // #cazzuola
    //         // #pappagallo
    //     })
    // })

    // hover
    blocchi.forEach(element => {
        element.addEventListener("mouseover", () => {
            rimuoviSelected()
            index = Array.from(blocchi).indexOf(element)
            changeSlide(index, element)
            // element.classList.add("selected")
            // descrizioniServizi[index].classList.add("selected")
            // console.log("current index: ", index)
        })
    })

    // rimuovi tutti i tags selected
    function rimuoviSelected() {
        descrizioniServizi.forEach(element => {
            element.classList.remove("selected")
        })
        blocchi.forEach(element => {
            element.classList.remove("selected")
        })
    }

    function changeSlide(_index, hoveredElement) {
        rimuoviSelected()
        // logic on hover
        if (hoveredElement !== undefined) {
            hoveredElement.classList.add("selected")
            descrizioniServizi[_index].classList.add("selected")
            console.log("current index: ", _index)
        } else {
            // logic on click
            blocchi[_index].classList.add("selected")
            descrizioniServizi[_index].classList.add("selected")
        }
    }
    // carets navigation
    const navCaretLeft = document.querySelector("#caret-left")
    const navCaretRight = document.querySelector("#caret-right")
    console.log(navCaretRight)

    navCaretLeft.addEventListener("click", () => {
        console.log("oldindex ", index)
        index -= 1
        if (index < 0) {
            index = 6
        }
        changeSlide(index)
        console.log("clicked caret left, newindex: ", index)
    })

    navCaretRight.addEventListener("click", () => {
        index += 1
        if (index > 6) {
            index = 0
        }
        changeSlide(index)
        console.log("clicked caret right, newindex: ", index)
    })

    // adattamento viewbox mobile
    const svgLogo = document.getElementById("Livello_1");
    function fixSvgMobile(svgLogo) {
        if (window.innerWidth < 768) {
            // original viewBox: 0 0 820.2 1197.2
            svgLogo.setAttribute("viewBox", "0 0 580 1197.2");
        }
    }
    fixSvgMobile(svgLogo)
    addEventListener("resize", fixSvgMobile(svgLogo))
})
