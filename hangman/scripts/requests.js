const getPuzzle = async (wordCount) => {
    const respons = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (respons.status === 200) {
        const data = await respons.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}

const getCountry = async (countryCode) => {
    const respons = await fetch('//restcountries.eu/rest/v2/all', {})

    if (respons.status === 200) {
        const data = await respons.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch data')
    }
}

/* const getLocation = () => {
    return fetch('//ipinfo.io/json?token=c73d77f5147736').then((respons) => {
        if (respons.status === 200) {
            return respons.json()
        } else {
            throw new Error('An error has been accured.')
        }
    })
} */