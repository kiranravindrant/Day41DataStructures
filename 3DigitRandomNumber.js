let A = [];

for (var i = 0; i < 10; i++) {
    A.push(Math.floor(Math.random() * 900 + 100));
}
console.log(A);

var i;
var firstMax = 0, secondMax = 0, firstMin = Number.MAX_VALUE, secondMin = Number.MAX_VALUE;


for (i = 0; i < A.length; i++) {
    if (A[i] > firstMax) {
        firstMax = A[i];
    }
}

for (i = 0; i < A.length; i++) {
    if (A[i] > secondMax && A[i] < firstMax) {
        secondMax = A[i];
    }
}

console.log("The second largest element is " + secondMax);


for (i = 0; i < A.length; i++) {
    if (A[i] < firstMin) {
        secondMin = firstMin;
        firstMin = A[i];
    }
    else if (A[i] < secondMin && A[i] != firstMin)
        secondMin = A[i];
}

console.log("The second Smallest element is " + secondMin);