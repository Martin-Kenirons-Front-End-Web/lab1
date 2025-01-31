function countSpaces(value) {
    return value.length;
}
console.log(countSpaces(" test 1 "));
function countNoSpaces(value) {
    return value.trim().length;
}
console.log(countNoSpaces(" test 1 "));
function countBoth(value, spaces) {
    var length;
    if (spaces) {
        length = value.length;
    }
    else {
        length = value.trim().length;
    }
    return length;
}
console.log(countBoth(" test 1 ", true));
console.log(countBoth(" test 1 ", false));
console.log(countBoth(" test 1 "));
