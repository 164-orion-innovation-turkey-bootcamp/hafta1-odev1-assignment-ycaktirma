function main(){

    let testCases =[
        {
            nums:[1,2,7,11,15,5,4,8],
            target:9
        },
        {
            nums:[3,2,4],
            target:6
        },
        {
            nums:[3,3],
            target:6
        }
    ]

    for(let input of testCases){
        console.log(`Test case:`);
        console.time('execution-time');
        let result = findNumberPairsSum(input.nums, input.target);
        console.timeEnd('execution-time'); 
        console.log('Output:\n',result,'\n');
    }

}
main();


/**
 * Returns indexes
 * @param {*} nums 
 * @param {*} target 
 * @returns array
 */
 function findNumberPairsSum(array, target){

    let mappedValues = new Map();
    let result = [];
    for(let i =0; i< array.length; i++){

        let wantedNumber =  target - array[i];

        if(mappedValues.has(wantedNumber) ){
            result.push( [mappedValues.get(wantedNumber), i]  );
        }
        mappedValues.set(array[i],i);
    }
    return result;

}
//O(n)