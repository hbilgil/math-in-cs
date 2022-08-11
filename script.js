const result1 = document.querySelector('[data-result-fibonacci-iteration-sequence]');
const result2 = document.querySelector('[data-result-fibonacci-iteration-total]');
const result3 = document.querySelector('[data-result-fibonacci-recursion-sequence]');
const result4 = document.querySelector('[data-result-fibonacci-recursion-total]');
const result5 = document.querySelector('[data-result-merge-sort]');

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');

/*---FIBONACCI SEQUENCE (iteration) of a RANGE FUNCTIONS---*/

function getNValueForFibIteration() {
    let value = prompt("Enter a Number");
    let n = parseInt(value);
    fibRangeIteration(n);
}

function fibRangeIteration (n) {
    let fib;
    let array = [];
    
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib = 0;
        } else {
            fib = b;
            b = a + b;
            a = fib;
        }
        array.push(fib);
    }
    result1.textContent = array;
    result2.textContent = b;
    return b;
}

button1.addEventListener('click', getNValueForFibIteration);
window.addEventListener('load', () => {
    fibRangeIteration(6);
})

/*---FIBONACCI SEQUENCE (recursion) of a RANGE FUNCTIONS---*/

function getNValueForFibRecursion() {
    let value = prompt("Enter a Number");
    let n = parseInt(value);
    fibRangeRecursionTotal(n);
    fibsRecursion(n);
}

function fibsRecursion (n) {
    let array;
	if (n == 1) {
        array = [0]
    } else if (n == 2) {
        array = [0, 1]
    } else { 
		array = [...fibsRecursion(n - 1), fibsRecursion(n - 1)[n - 2] + fibsRecursion(n - 1)[n - 3]];
    }
    result3.textContent = array;
    return array;
}

function fibRangeRecursionTotal(n) {
    let fib;
    if(n < 2) {
        fib = n;
    } else {
	    fib = fibRangeRecursionTotal(n - 1) + fibRangeRecursionTotal(n - 2);
    }
    result4.textContent = fib;
    return fib;
}

button2.addEventListener('click', getNValueForFibRecursion);
window.addEventListener('load', () => {
    fibRangeRecursionTotal(6);
})

window.addEventListener('load', () => {
    fibsRecursion(6);
})

/*---MERGE SORT FUNCTIONS---*/

function getValuesForMergeSort() {
    let value1 = prompt("Enter 1st number of an array with 10 elements");
    let value2 = prompt("Enter 2nd number of an array with 10 elements");
    let value3 = prompt("Enter 3rd number of an array with 10 elements");
    let value4 = prompt("Enter 4th number of an array with 10 elements");
    let value5 = prompt("Enter 5th number of an array with 10 elements");
    let value6 = prompt("Enter 6th number of an array with 10 elements");
    let value7 = prompt("Enter 7th number of an array with 10 elements");
    let value8 = prompt("Enter 8th number of an array with 10 elements");
    let value9 = prompt("Enter 9th number of an array with 10 elements");
    let value10 = prompt("Enter 10th number of an array with 10 elements");
    let a = parseInt(value1);
    let b = parseInt(value2);
    let c = parseInt(value3);
    let d = parseInt(value4);
    let e = parseInt(value5);
    let f = parseInt(value6);
    let g = parseInt(value7);
    let h = parseInt(value8);
    let i = parseInt(value9);
    let j = parseInt(value10);
    let array = [a,b,c,d,e,f,g,h,i,j];
    mergeSort(array);
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    const midPoint = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, midPoint));
    const rightHalf = mergeSort(array.slice(midPoint));
    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    let result = [];

  while (left.length > 0 && right.length > 0) {
    const arrayWithMin = left[0] < right[0] ? left : right;
    const mergeElement = arrayWithMin.shift();
    result.push(mergeElement);
  }
  while (left.length > 0) {
    const mergeElement = left.shift();
    result.push(mergeElement);
  }
  while (right.length > 0) {
    const mergeElement = right.shift();
    result.push(mergeElement);
  }
  result5.textContent = result;
  return result.concat(left, right);
}

button3.addEventListener('click', getValuesForMergeSort);
window.addEventListener('load', () => {
    let array = [4,7,5,9,3,6,8,1,0,2];
    mergeSort(array);
})