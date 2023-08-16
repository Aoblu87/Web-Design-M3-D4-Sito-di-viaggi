window.onload = function () {





    const summerButton = document.querySelectorAll('.collapsible')
    const summerCards = document.querySelector('#welcome-summer >div:last-child')

    for (button of summerButton) {

        button.addEventListener('click', function (event) {

                summerCards.style.display = 'none'
           


        })

    }






}