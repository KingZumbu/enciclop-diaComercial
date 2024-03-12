// rendering
const sr = NewShowRoom()

window.addEventListener('DOMContentLoaded', () => {
    sr.init()
})

// showroom

function NewShowRoom() {
    const automationTime = 3000; // 3 segundos, logo 3000 milissegundos
    const pinpage = [];
    let currentPage = 1;
    let totalPage = 0;
    let automation;


    const contentEl = document.querySelector('.sr-showroom .sr-content > ul')

    function renderPage() {
        stopAuto()

        // altera a image que esta sendo renderizada
        const vwSize = (currentPage-1)*(-100)
        contentEl.style.transform = `translateX(${vwSize}vw)`;

        // alterar o pin da pagina
        // remove todos os sr-enable
        pinpage.forEach(el => el.classList.remove('sr-enable'))

        pinpage[currentPage-1].classList.add('sr-enable')

        startAuto()
    }
    
    function nextPage(){
        // pode ir para a proxima pagina?
        const nextPage = currentPage + 1
        if(nextPage > totalPage) {
            // se a proxima pagina for maior que o total de paginas, entao, não pode e deve reiniciar
            currentPage = 1
        } else {
            // se a proxima pagina for menor que o total de paginas, entao, pode mudar
            currentPage = nextPage
        }
        
        renderPage()
    }

    function previousPage() {
        // pode ir para a pagina anterio?
        const previousPage = currentPage - 1
        if(previousPage < 1) {
            // se a pagina anterior for menor que a primeira, entao deve ir para a ultima
            currentPage = totalPage
        } else {
            // se a pagina anterior for maior que 1, entao pode
            currentPage = previousPage
        }
        
        renderPage()
    }

    function startAuto() {
        automation = setTimeout(nextPage, automationTime)
    }
    
    function stopAuto() {
        clearTimeout(automation)
    }

    function createPinPaginate(totalPages) {
        const srPaginateEl = document.querySelector('.sr-showroom .sr-paginate')

        const paginateEl = document.createElement("ul")
        
        for(let i = 0; i < totalPages; i++) {
            const pin = document.createElement("li")
            pinpage.push(pin)

            paginateEl.appendChild(pin)
        }

        srPaginateEl.appendChild(paginateEl)
    }

    return {
        getCurrentPage(){
            return currentPage;
        },

        getTotalPage() {
            return totalPage;
        },

        init() {
            currentPage = 1;
            totalPage = getTotalShowRoomImgs()
            createPinPaginate(totalPage)

            renderPage()
        },

        startAuto,
        stopAuto,
        nextPage,
        previousPage,
    }
}

function getTotalShowRoomImgs() {
    // conta quantas imagens tem no showroom
    const imgs = document.querySelectorAll(".sr-showroom .sr-content > ul > li > img")

    if(imgs) {
        return imgs.length
    }

    return 0
}