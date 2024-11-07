const bigTitle = document.querySelector('.bigTitle')
const closs = document.querySelector('.close')

closs.classList.add('hidden')

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
    closs.classList.remove('hidden')
}


function clos(){

    flow.classList.add('hidden')
    colors.classList.add('hidden')
    fonts.classList.add('hidden')
    closs.classList.add('hidden')

}
function colo1(){

    bigTitle.style.color = ' #51687d'
    flow.classList.add('hidden')
    colors.classList.add('hidden')
    closs.classList.add('hidden')
}

function colo2(){

    bigTitle.style.color = 'white'
    flow.classList.add('hidden')
    colors.classList.add('hidden')
    closs.classList.add('hidden')
}
function colo3(){

    bigTitle.style.color = '#d59bff'
    flow.classList.add('hidden')
    colors.classList.add('hidden')
    closs.classList.add('hidden')
}
function colo4(){

    bigTitle.style.color = 'black'
    flow.classList.add('hidden')
    colors.classList.add('hidden')
    closs.classList.add('hidden')
}

// fonts 


const fonts = document.querySelector('.fn')
fonts.classList.add('hidden')

function btnFont(){

    fonts.classList.remove('hidden')
    flow.classList.remove('hidden')
    closs.classList.remove('hidden')
}

function one(){

    bigTitle.classList.add('fontOne')
    flow.classList.add('hidden')
    fonts.classList.add('hidden')
    closs.classList.add('hidden')

}
function two(){

    bigTitle.classList.add('fontTwo')
    flow.classList.add('hidden')
    fonts.classList.add('hidden')
    closs.classList.add('hidden')
}
function three(){

    bigTitle.classList.add('fontThree')
    flow.classList.add('hidden')
    fonts.classList.add('hidden')
    closs.classList.add('hidden')
}
function foure(){
    bigTitle.classList.add('fontFoure')
    flow.classList.add('hidden')
    fonts.classList.add('hidden')
    closs.classList.add('hidden')
    
}