var flag = true;
console.log("The value assigned to flag is: " + flag);
var myNumber = 234234.2343;
console.log("The value assigned to myNumber is: " + myNumber);
var myString = "Hello";
console.log("The value assigned to myString is: " + myString);
var unKnown = "Unkown data";
console.log("The value assigned to unKnown is: " + unKnown);
var myArray = ["test", "skldfj", "ksjdf"];
var mySecondArray = [2, 4, 6];
for (var i = 0; i < mySecondArray.length; i++) {
    console.log("Item: " + mySecondArray[i] + " is in mySecondArray.");
}
mySecondArray.forEach(function (elem) {
    console.log("Element: " + elem);
});
