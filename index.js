export function findClosestInArray(findValue, array) {
    return array.sort((a, b) => Math.abs(findValue - a) - Math.abs(findValue - b))
}

export function findClosestInMatrix(findValueMatrix, arrayMatrix) {
    return arrayMatrix.sort((a, b) => {
        let value = 0;

        for (let i = 0; i < findValueMatrix.length; i++) {
            value += Math.abs(findValueMatrix[i] - a[i]) - Math.abs(findValueMatrix[i] - b[i])
        }

        return value
    })[0]
}