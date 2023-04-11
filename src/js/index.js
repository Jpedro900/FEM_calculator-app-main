

let key = document.querySelectorAll('.key')
let screennumbers = document.getElementById('screennumbers')
let operator = document.querySelectorAll('.operator')
let total = 0

key.forEach((botao,i) => {    
        if(key[i].className != 'key operator'){
            botao.addEventListener('click', () => {
            screennumbers.innerHTML += key[i].innerHTML
            })
        }
})

function changeTheme(cssFile){
    let theme = document.getElementById('theme')
    theme.setAttribute('href',cssFile)
}

function reset(){
    screennumbers.innerHTML = ''
    total = 0
}

function deletar(){
    screennumbers.innerHTML = screennumbers.innerHTML.substring(0, screennumbers.innerHTML.length -1)
}

function showTotal(){
    let resultado = screennumbers.innerHTML
    if(resultado){
    screennumbers.innerHTML = eval(screennumbers.innerHTML)
    }else{
    screennumbers.innerHTML = 'nada'
    }
}




