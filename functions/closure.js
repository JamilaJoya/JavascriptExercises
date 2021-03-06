// Create counter 
const createCounter = () => {
    let count = 0
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const Counter = createCounter()
Counter.increment()
Counter.decrement()
Counter.decrement()
console.log(Counter.get())


// Adder 
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(10))


const add100 = createAdder(100)
console.log(add100(-90))

// createTiper
const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount


    }

}

const tip20 = createTipper(.2)
const tip30 = createTipper(.3)
console.log(tip20(100))
console.log(tip30(100))
