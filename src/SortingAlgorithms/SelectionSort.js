export function getSelectionSortAnimations(array){
    let animations = [];
    let additionalArray = array.slice();
    selectionSort(additionalArray, animations);
    array=additionalArray;
    return [animations, array];
}
function selectionSort(additionalArray, animations){
    const length = additionalArray.length;
    for(let i=0; i<length-1; i++){
        let minIndex = i;
        for(let j=i+1; j<length; j++){
            animations.push(["comparison1", j, minIndex]); // comparing these two at the moment
            animations.push(["comparison2", j, minIndex]);
            if(additionalArray[j]<additionalArray[minIndex])
                minIndex=j;
        }
        animations.push(["swap",minIndex,additionalArray[i]]);
        animations.push(["swap", i, additionalArray[minIndex]]);
        swap(additionalArray,minIndex,i);
    }  
}

function swap(additionalArray,firstIndex,secondIndex){
    let temp = additionalArray[firstIndex];
    additionalArray[firstIndex] = additionalArray[secondIndex];
    additionalArray[secondIndex] = temp;
}