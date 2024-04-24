console.log('hi')
panels = document.querySelectorAll('.panel')
console.log(panels)

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

panels.forEach(panel => {
    console.log(panel)
    panel.addEventListener('click', () => {
        // console.log('clicked')
        removeActiveClasses()
        panel.classList.add('active')
    })
})
