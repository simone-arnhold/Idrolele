document.addEventListener("DOMContentLoaded", function (event) {

    const blocchi = document.querySelectorAll(".blocco-interattivo")
    const descrizioniServizi = document.querySelectorAll(".descrizione-servizi")


    console.log(blocchi)
    console.log(descrizioniServizi)

    blocchi.forEach(element => {
        element.addEventListener("mouseover", () => {
            console.log("mouseover over " + element)
            // remove all hover tags
            descrizioniServizi.forEach(element => {
                element.classList.remove("selected")
            })

            const index = Array.from(blocchi).indexOf(element)
            element.classList.toggle("selected")
            descrizioniServizi[index].classList.toggle("selected")
            // #chiaveingl
            // #martello
            // #pennello
            // #pappagallo
            // #lavandino
            // #cazzuola
            // #stur
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