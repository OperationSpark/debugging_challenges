/* This function should convert a fahrenheit
   temperature to celsius and return
   the result
   */

function toCelsius(fahrenheit) {
    return 5 / 9 * fahrenheit - 32;
}

/* 
This function should compare the lengths of 
each string and return the longer of the two
*/
function longerString(str1, str2) {
    if (str1 > str2) {
        return str2;
    } else {
        return str1;
    }
}


/* This function should add an element to an array using bracket notation 
   and return the array
*/

function append(array, element) {
    array = element;
    return [array];
}


/* This function should add all numbers from 1 to n and return the result
   (i.e. triangleSum(4) should return 10 because 1 + 2 + 3 + 4 = 10)
*/

function triangleSum(n) {
    var sum;
    for (var i; i < n; i++) {
        sum + i;
    }
    return sum;
}


/* This function should return the sum of all numbers in an array */

function sumArray(array) {

    for (var i = 0; i < array.length - 1; i++) {
        var total = 0
        total += array[i];
        return total;
    }
}


/* This function return true if the valueToFind is
    in the object, false otherwise
*/

function findValueInObject(obj, valueToFind) {
    for (var key in obj) {
        if (key === valueToFind) {
            return true;
        } else {
            return false;
        }
    }
}



/* This function should give back the array that has the largest number in it
   (i.e. if arr1 = [1, 7, 5] and arr2 = [2, 3, 4, 6] return arr1)
*/

function largestArray(array1, array2) {
    var largestInArray1 = array1[0];
    var largestInArray2 = array2[0];

    for (var i = 1; i < array1.length; i++) {
        if (largestInArray1 > array1[i]) {
            largestInArray1 = array1[i];
        }
    }
    for (var j = 0; j < array2.length; j++) {
        if (largestInArray2 <= array2[i]) {
            largestInArray2 = array2[i];
        }
    }

    if (largestInArray1 > largestInArray2) {
        return largest1
    }

}

/*
This function should accept an array and 
create / return a reversed copy of that Array
*/

function makeReversedArray(someArray) {
    var reversedArray = [];
    for (var i = 0; i <= reversedArray.length; i++) {
        reversedArray.push(someArray[i]);
        return reversedArray;
    }
}

/////// TESTS ///////

testSolutions();

function testSolutions() {
    var arr, arr2, returned, testResult1, testResult2;

    // toCelsius
    returned = toCelsius(212);
    testResult1 = returned === 100;
    console.log("toCelsius: " + testResult1);

    // longerString
    returned = longerString('apple', 'banana');
    testResult1 = returned === 'banana';
    console.log("longerString: " + testResult1);

    // Append
    arr = [1, 2, 3];
    arr2 = ['a', 'b'];

    returned = append(arr, 4);
    testResult1 = returned[0] === 1 && returned[1] === 2 && returned[2] === 3 && returned[3] === 4;

    returned = append(arr2, 'c');
    testResult2 = returned[0] === 'a' && returned[1] === 'b' && returned[2] === 'c'
    console.log("append: " + (testResult1 && testResult2));

    // triangleSum
    returned = triangleSum(arr, 4);
    testResult1 = returned === 10;
    console.log("triangleSum: " + testResult1);

    // sumArray
    returned = sumArray([1, 2, 3, 4, 5]);
    testResult1 = returned === 15;
    console.log("sumArray: " + testResult1);

    // findValueInObject
    var obj = {
        key1: 'apple',
        key2: 'banana',
        key3: 'cherry'
    }

    returned = findValueInObject(obj, 'banana');
    testResult1 = returned === true;

    returned = findValueInObject(obj, 'kiwi');
    testResult2 = returned === false;
    console.log("findValueInObject: " + (testResult1 && testResult2));

    // largestArray
    arr = [1, 2, 10, 4, 5];
    arr2 = [1, 2, 3, 4, 7];

    returned = largestArray(arr, arr2);
    testResult1 = returned === arr;
    console.log("largestArray: " + testResult1);

    // reversedArray
    var myValues = ["first", "second", "third"];
    var reversedValues = makeReversedArray(myValues);
    testResult1 = reversedValues[0] === 'third' && reversedValues[1] === 'second' && reversedValues[2] === 'first';
    console.log("makeReversedArray: " + testResult1);
}









