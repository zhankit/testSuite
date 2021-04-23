/**
 * Write a function that accepts an array as param to return the largest and smallest number different between numbers. And, write test case as well.
 * Example:
 * [4, 8, 10, 6] -> largest = 6, smallest = 2
 * [4, 8, 10, 6] ->  the number 10 - 4 gaps is 6 which is the largest compare to the others
 * @param {array} a
 * @returns {number} the differences between largest and smallest in array a of integers
 * 
 */
const largestDifferences = ( arr: Array<number> ) => {
    
    let min, max;
    if ( arr.length <= 1 ) return 0;
    else min = max = arr[0];

    for ( let i = 0; i <= arr.length; i++ ) {
        if( arr[i] < min ) min = arr[i];
        if( arr[i] > max ) max = arr[i]; 
    }

    return max - min;
    
}

export default largestDifferences;