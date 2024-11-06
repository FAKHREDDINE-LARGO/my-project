const bigTitle = document.querySelector('.bigTitle')
function anima(){

bigTitle.classList.toggle('animated-text')
}

const flow = document.querySelector('.flow')
const colors = document.querySelector('.colors')
flow.classList.add('hidden')
colors.classList.add('hidden')
function colora(){
    flow.classList.toggle('hidden')
    colors.classList.toggle('hidden')
}


function clos(){

    flow.classList.add('hidden')
    colors.classList.add('hidden')



}

function colo1(){

    bigTitle.style.color = ' #51687d'
    flow.classList.add('hidden')
    colors.classList.add('hidden')
}

function colo2(){

    bigTitle.style.color = 'white'
    flow.classList.add('hidden')
    colors.classList.add('hidden')
}
function colo3(){

    bigTitle.style.color = '#d59bff'
    flow.classList.add('hidden')
    colors.classList.add('hidden')
}
function colo4(){

    bigTitle.style.color = 'black'
    flow.classList.add('hidden')
    colors.classList.add('hidden')
}