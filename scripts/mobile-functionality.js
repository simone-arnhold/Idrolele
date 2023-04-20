document.addEventListener("DOMContentLoaded", function (event) {

  const menuBtn = document.querySelector(".menu-btn")
  const navMenu = document.querySelector(".mobile-nav")
  const mobileNavElements = navMenu.querySelectorAll("li")

  console.log(navMenu)
  console.log(mobileNavElements)


  mobileNavElements.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open")
      menuBtn.classList.remove("open")
    })
  });

  let menuOpen = false
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open")
    if (!menuOpen) {
      menuBtn.classList.add("open")

      menuOpen = true
    } else {
      menuBtn.classList.remove("open")
      menuOpen = false
    }
  })

})
