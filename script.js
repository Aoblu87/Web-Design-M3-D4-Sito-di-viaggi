
// const summerCards = document.querySelector('#welcome-summer >div:last-child')
// // const cards= document.querySelectorAll('#welcome-summer>div:last-child .col-6')

const collapseButton = document.querySelectorAll('.collapsible')
const sections = document.querySelectorAll('.collapse-section')

const removeButton = document.querySelectorAll('.removeButton')
const countButton = document.querySelector('#count')
const cards = document.querySelectorAll('.collapse-section>div')


const countResult = document.createElement('div')
countButton.appendChild(countResult)
// countResult.className = 'col-6'

const contactButton= document.querySelector('#contact-button')
const cancelButton = document.querySelector('#cancel')
const dialog = document.querySelector('#contact-me')

window.onload = function () {




    // ----------------Dichiaro costanti dei nodi del DOM





    // -------------------Collapsible Sections--------ESERCIZIO 1


    for (const button of collapseButton) {

        button.addEventListener('click', function (event) {

            for (const section of sections) {
                // section.classList.toggle('.hidden')
                section.style.display = 'none'
            }
        })
    }
    
    //--------------Bottoni per rimuovere cards e per contarle--------
    
    //--------------ESERCIZIO 2 RIMUOVI CARDS
    
    for (const button of removeButton) {
        
        button.addEventListener('click', function (event) {
            
            for (const card of cards) {
                card.remove()
            }
            
        })
        
    }
    
    //------------ESERCIZIO 5 CONTA CARDS
    
    
    countButton.addEventListener('click', function (event) {
        let countCards=0
        for (const card of cards){
            countCards ++
        }
        countResult.innerHTML = countCards
        
    }
    )
    

    
//---------SHOW MODAL()-----------

contactButton.addEventListener('click', function (event){
dialog.showModal()

}
)

//-------Close Modal-----------

cancelButton.addEventListener('click', function (event){

    dialog.close()
}

)






}