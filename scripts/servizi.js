document.addEventListener("DOMContentLoaded", function (event) {

    const blocchi = document.querySelectorAll(".blocco-interattivo")
    const descrizioniServizi = document.querySelectorAll(".descrizione-servizi")


    console.log("blocchi: ", blocchi)
    console.log("servizi: ", descrizioniServizi)

    blocchi.forEach(element => {
        element.addEventListener("mouseover", () => {
            // remove all hover tags
            descrizioniServizi.forEach(element => {
                element.classList.remove("selected")
                blocchi.forEach(element => {
                    element.classList.remove("selected")
                })
            })

            var index = Array.from(blocchi).indexOf(element)
            element.classList.add("selected")
            descrizioniServizi[index].classList.add("selected")
            console.log("current index: ", index)
            // #chiaveingl
            // #martello
            // #pennello
            // #pappagallo
            // #lavandino
            // #cazzuola
            // #stur

            // new order:
            // #pennello
            // #martello
            // #chiaveingl
            // #lavandino
            // #stur
            // #cazzuola
            // #pappagallo

        })

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