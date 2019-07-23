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









///////////////////////////////////////////////////////////////
//////////////////////////// TESTS ////////////////////////////
///////////////////////////////////////////////////////////////

testSolutions();

function testSolutions() {
  var returned, expected;
  
  // toCelsius
  console.log("\ntoCelsius");
  returned = toCelsius(212);
  console.log("toCelsius(212) returned: " + returned);

  expected = 100;
  console.log("expected: " + expected);



  console.log("\nlongerString");
  // longerString
  returned = longerString('apple', 'banana');
  console.log("longerString('apple', 'banana') returned: " + returned);

  expected = 'banana';
  console.log("expected: " + expected);



  console.log("\nappend");
  // Append
  returned = append([1, 2, 3]);
  console.log("append([1,2,3], 4) returned: " + returned);

  expected = [1, 2, 3, 4];
  console.log('expected: ' + expected);

  returned = append(['a', 'b'], 'c');
  console.log("append(['a', 'b'], 'c') returned: " + returned);

  expected = ['a', 'b', 'c'];
  console.log('expected: ' + expected);



  console.log("\ntriangleSum");
  // triangleSum
  returned = triangleSum([1,2,3,4]);
  console.log("triangleSum([1,2,3,4]) returned: " + returned);

  expected = 10;
  console.log('expected: ' + expected);


  console.log("\nsumArray");
  // sumArray
  returned = sumArray([1, 2, 3, 4, 5]);
  console.log("sumArray([1,2,3,4,5]) returned: " + returned);

  expected = 15;
  console.log("expected: " + expected);


  console.log("\nfindValueInObject");
  // findValueInObject
  var obj = {
    key1: 'apple',
    key2: 'banana',
    key3: 'cherry'
  }

  returned = findValueInObject(obj, 'banana');
  console.log("findValueInObject(obj, 'banana') returned: " + returned);
  expected = true;
  console.log("expected: " + expected);

  returned = findValueInObject(obj, 'kiwi');
  console.log("findValueInObject(obj, 'kiwi') returned: " + returned);
  expected = false;
  console.log("expected: " + expected);


  
  // largestArray
  console.log("\nlargestArray");
  returned = largestArray([1, 2, 3], [4, 3, 2]);
  console.log("largestArray([1,2,3], [4,3,2]) returned: " + returned);
  expected = [4, 3, 2];
  console.log("expected: " + expected);


  // reversedArray
  console.log("\nmakeReversedArray");
  returned = makeReversedArray(['a', 'b', 'c']);
  console.log("makeReversedArray(['a', 'b', 'c']) returned: " + returned);
  expected = ['c', 'b', 'c'];
  console.log('expected: ' + expected);
}









