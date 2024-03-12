window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.sr-content li').forEach(el => {
        el.addEventListener("mouseenter", (ev) => {
            const imgEl = ev.target.querySelector('img')
            const infoEl = document.createElement('p')
            const [year, team] = getYearAndTeam(imgEl.src)
            
            infoEl.innerHTML = `${year} - ${team}`
            
            ev.target.appendChild(infoEl)
            console.log()
        })

        el.addEventListener("mouseleave", (ev) => {
            const infoEl = ev.target.querySelector('p')
            if (infoEl) {
                ev.target.removeChild(infoEl)
            }
        })
    })
})

function getYearAndTeam(src) {
    const regexp = /assets\/(\d{4})\-Formula1\-(.*)(\-(.*)){3}$/
    const result = regexp.exec(src)
    
    return [result[1], result[2].replace('-', ' ')]
}