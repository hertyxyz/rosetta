let test_array = [
    906, 615, 196, 98,  530, 852, 239, 884, 667, 975, 684, 362, 588, 566, 602,
    288, 908, 794, 454, 586, 718, 567, 363, 437, 507, 710, 126, 205, 886, 941
]

function quicksort(array) {
    return array.length === 0 ? [] : [].concat(
        quicksort(array.slice(1).filter(x => x < array[0])),
        array[0],
        quicksort(array.slice(1).filter(x => x >= array[0]))
    )
}

console.log(quicksort(test_array))