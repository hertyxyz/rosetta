let test_array = [
    771, 235, 572, 739, 121, 599, 301, 734, 885, 975,  78,  77, 311, 811, 199,
    917, 441, 398,  21, 201, 200, 956, 157, 720, 356, 941, 842, 134, 277, 932
]

function gnomesort(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i-1] > array[i]) {
            for ( ; i > 0 && array[i-1] > array[i]; i--) {
                let t = array[i]
                array[i] = array[i-1]
                array[i-1] = t
            }
        }
    }
    return array
}

console.log(gnomesort(test_array))