// function changeBackground() {
//     // Get current scroll position
//     var scrollPosition = window.pageYOffset
//     console.log(scrollPosition)

//     // Set the background color based on the scroll position
//     document.body.style.backgroundColor = "rgb(" + scrollPosition + ", 0, 0)"
// }



// const startColor = [246, 45, 45] //red
// const endColor = [16, 52, 166] //blue
const startColor = [247, 217, 217] //red
const endColor = [177, 205, 231] //blue
// const maxHeight = document.body.offsetHeight
const maxHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight);
console.log("maxHeight: ", maxHeight)

var currentColor = startColor.slice() //Make a copy of the starting color

function interpolateColor(color1, color2, currentRatio) {
    // make a copy of first color
    var result = color1.slice()
    console.log(color1)
    // loop through the color channels R,G,B in order
    for (var i = 0; i < 3; i++) {
        // result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]))
        result[i] = Math.round((color2[i] - color1[i]) * currentRatio) + startColor[i]
    }
    console.log(result)
    return result

}

// function to update the background color
function updateColor() {

    var scrollPosition = window.pageYOffset
    console.log("scrollPosition: ", scrollPosition)
    var heightRatio = (scrollPosition + 1) / maxHeight
    console.log("heightRatio: ", heightRatio)

    currentColor = interpolateColor(currentColor, endColor, heightRatio)
    document.body.style.backgroundColor = ("rgb(" + currentColor.join(",") + ")") //convert RGB values to CSS color format
    // temp
    // if (currentColor.toString() != endColor.toString()) {
    //     setTimeout(updateColor, 10)
    // }
}

updateColor()


