/* const myAge = 7
const message = myAge >= 18 ? 'You can vot!' : 'You can not vot!'
console.log(message) */

const myAge = 22
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}
const message = myAge >= 18 ? showPage() : showErrorPage()
console.log(message)

// lets have some game message
const team = ['Tyler', 'Porter', 'Andrew', 'Jamila', 'Ata']
//team.length<=4? console.log(`Team size: ${team.length}`): console.log(`too many people on your team.`)
console.log(team.length <= 4 ? `Team size: ${team.length}` : `Too many people on your team.`)

