let arrayNames = []

function addingNamesOnArray() {
    let inputValue = document.getElementsByClassName('inputFriendNames')[0].value
    if (inputValue == "") {
        document.getElementById('alertArea').innerHTML = "O campo precisa ser preenchido!"
    } else {
        document.getElementById('alertArea').innerHTML = ""
        document.getElementById('btnDraw').removeAttribute('disabled', true)
        document.getElementById('btnDraw').style.background = "#92E3A9"
        arrayNames.push(inputValue)
        arrayForEach()
        cleanInput()
    }
}

function arrayForEach() {
    let newElement = document.createElement('li')
    let box = document.getElementById("responseArea")
    arrayNames.forEach((index) => {
        box.appendChild(newElement)
        newElement.setAttribute("class", "styleLi")
        newElement.innerHTML = index
    })
}

function draw() {
    let drawNames = Math.floor(Math.random() * arrayNames.length)
    let resultNames = [drawNames]
    document.getElementById('responseArea').innerHTML = `Seu amigo secreto é ${arrayNames[resultNames]}`
    document.getElementById('newDraw').removeAttribute('disabled', true)
    document.getElementById('btnDraw').setAttribute('disabled', true)
    document.getElementById('btnInputArea').setAttribute('disabled', true)
    document.getElementById('btnDraw').style.background = "#ff8d8d"
    document.getElementById('newDraw').style.background = "#92E3A9"
}

function newDraw() {
    document.getElementById('responseArea').innerHTML = ""
    document.getElementById('newDraw').setAttribute('disabled', true)
    document.getElementById('btnInputArea').removeAttribute('disabled', true)
    document.getElementById('newDraw').style.background = "#ff8d8d"
    resetGame()
}

function btnUserName() {
    let userName = document.getElementsByClassName('inputUserName')[0].value
    if (userName == "") {
        document.getElementById('messageAreaUserName').innerHTML = "É necessário colocar o seu nome primeiro"
    } else {
        document.getElementById('messageAreaUserName').innerHTML = `Olá ${userName}, agora digite o nome dos seus amigos`
        document.getElementById('btnInputArea').removeAttribute('disabled', true)
        removeInputs()
    }
}

function removeInputs() {
    document.getElementById('inputsArea').style.display = 'flex'
    document.getElementById('divUserName').style.display = 'none'
}

function cleanInput() {
    cleanNames = document.getElementsByClassName('inputFriendNames')[0]
    cleanNames.value = ""
}

function resetGame() {
    arrayNames = []
    cleanInput()
}

