let elementsArray = [];

for (var i = 0; i < 10; i++) {
    elementsArray.push(Math.floor(Math.random() * 900 + 100));
}
console.log(elementsArray);

elementsArray.sort();


console.log("The second largest element is " + elementsArray[8]);
console.log("The second Smallest element is " + elementsArray[1]);
