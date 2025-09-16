const term = document.getElementById('term')
const definition = document.getElementById('definition')
const checkButton = document.getElementById('checkButton')
const nextButton = document.getElementById('nextButton')

let data = Object.entries(vocab)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`
}

checkButton.addEventListener('click', () => {
    definition.style.display = 'block'
})

nextButton.addEventListener('click', () => {
    getRandomWord()
    definition.style.display = 'none'
})



