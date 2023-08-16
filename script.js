
const summerCards = document.querySelector('#welcome-summer >div:last-child')
// const cards= document.querySelectorAll('#welcome-summer>div:last-child .col-6')

window.onload = function () {





    const summerButton = document.querySelectorAll('.collapsible')
    const summerCards = document.querySelector('#welcome-summer >div:last-child')

    for (button of summerButton) {

        button.addEventListener('click', function (event) {

                // summerCards.classList.toggle('hidden')
                summerCards.computedStyleMap.display='none'
           


        })

    }






}