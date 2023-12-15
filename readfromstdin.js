function result() {
    // accumulator for enter data type string
    let userInput = ''
    process.stdin.on('data', (data) => {
        userInput += data.toString()
        console.log(userInput)
    })
    process.stdin.on('end', () => {
        const sum = sumFun(userInput)
        console.log(sum)
    })
}

const sumFun = (userInput) => {
    return userInput
        .trim()
        .split('\n')
        .map(el => parseInt(el, 10))
        .reduce((acc, curVal) => {
            return acc + curVal
        })}

result()