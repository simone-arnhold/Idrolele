document.addEventListener("DOMContentLoaded", function (event) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeIn")
            }
        })
    })

    const sections = document.querySelectorAll("section")
    sections.forEach(section => {
        observer.observe(section)
    })
})
