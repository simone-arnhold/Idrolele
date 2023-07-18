document.addEventListener("DOMContentLoaded", function (event) {

    const icone = document.querySelectorAll(".portfolio-icon-container")
    const contenuti = document.querySelectorAll(".portfolio-content")

    console.log("icone: ", icone)
    console.log("contenuti: ", contenuti)

    // hover
    icone.forEach(element => {
        element.addEventListener("click", () => {
            rimuoviSelected()
            index = Array.from(icone).indexOf(element)
            changeSlide(index, element)
            // element.classList.add("selected")
            // contenuti[index].classList.add("selected")
            // console.log("current index: ", index)
        })
    })

    // rimuovi tutti i tags selected
    function rimuoviSelected() {
        contenuti.forEach(element => {
            element.classList.remove("selected")
        })
        icone.forEach(element => {
            element.classList.remove("selected")
        })
    }

    function changeSlide(_index, selectedElement) {
        rimuoviSelected()
        // logic on hover
        if (selectedElement !== undefined) {
            selectedElement.classList.add("selected")
            contenuti[_index].classList.add("selected")
            console.log("current index: ", _index)
        } else {
            // logic on click
            icone[_index].classList.add("selected")
            contenuti[_index].classList.add("selected")
        }
    }
    // carets navigation
    // const navCaretLeft = document.querySelector("#caret-left")
    // const navCaretRight = document.querySelector("#caret-right")
    // console.log(navCaretRight)

    // navCaretLeft.addEventListener("click", () => {
    //     console.log("oldindex ", index)
    //     index -= 1
    //     if (index < 0) {
    //         index = 6
    //     }
    //     changeSlide(index)
    //     console.log("clicked caret left, newindex: ", index)
    // })

    // navCaretRight.addEventListener("click", () => {
    //     index += 1
    //     if (index > 6) {
    //         index = 0
    //     }
    //     changeSlide(index)
    //     console.log("clicked caret right, newindex: ", index)
    // })

    // adattamento viewbox mobile
    // const svgLogo = document.getElementById("Livello_1");
    // function fixSvgMobile(svgLogo) {
    //     if (window.innerWidth < 768) {
    //         // original viewBox: 0 0 820.2 1197.2
    //         svgLogo.setAttribute("viewBox", "0 0 580 1197.2");
    //     }
    // }
    // fixSvgMobile(svgLogo)
    // addEventListener("resize", fixSvgMobile(svgLogo))
})
