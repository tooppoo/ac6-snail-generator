import { generate } from './src/generator.js'

const gen = document.getElementById('generate')
const reset = document.getElementById('reset')
const targets = document.getElementsByName('snail')

gen.addEventListener('click', () => {
    const name = generate()
    if (!name) {
        alert('generate() not return any value')

        initialize()
    }

    setName(name)
})
reset.addEventListener('click', () => initialize())

function initialize() {
    setName('スネイル')
}
function setName(name) {
    targets.forEach((t) => {
        t.innerText = name
    })
}

initialize()
