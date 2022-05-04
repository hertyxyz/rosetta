const test_array = [
    310, 660, 145, 690, 962, 594, 983, 265, 763, 69, 209, 87, 670, 745, 555
]

function shuffle(array) {
    for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array
}

function test(array) {
    console.log(array)
    for (let i = 1; i < array.length; i++) {
        if (array[i-1] > array[i]) return false
    }
    return true
}

let temp_array = test_array
let sorted = false

while (!sorted) {
    temp_array = shuffle(temp_array)
    sorted = test(temp_array)
}

console.log(temp_array)

