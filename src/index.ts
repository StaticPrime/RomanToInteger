enum romans {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
}

function romanToInt(rumanNumeral: string): number {
    let total = 0
    for (let i = 0; i < rumanNumeral.length; i++) {
        if (!rumanNumeral[i+1] || romans[rumanNumeral[i]] >= romans[rumanNumeral[i+1]]) {
            total += romans[rumanNumeral[i]]
        } else {
            total += romans[rumanNumeral[i+1]] - romans[rumanNumeral[i]]
            i++
        }
    }
    return total
}

const args = process.argv.slice(2)

console.log(romanToInt(args[0]))