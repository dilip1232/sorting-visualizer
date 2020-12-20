export function getMergeSortAnimations(array){
    let animations = [];
    let additionalArray = array.slice();
    //console.log(array);
    let sortedArray = mergeSort(additionalArray,animations);
    //console.log(sortedArray);
    return [animations,sortedArray];
}

function mergeSort(additionalArray,animations){

    if(additionalArray.length<=1)
        return additionalArray;
    let mid = Math.floor(additionalArray.length/2);
    let left = mergeSort(additionalArray.slice(0,mid),animations);
    let right = mergeSort(additionalArray.slice(mid),animations);
    return merge(left, right,animations);
}

function merge(arr1, arr2,animations){
    let results = [];
    let j =0;
    let i =0;

    while(i<arr1.length && j<arr2.length){
        animations.push("comparison1",i,j);
        animations.push("comparison2",i,j);
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        }else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        animations.push("comparison1",i,i);
        animations.push("comparison2",i,i);
        results.push(arr1[i]);
        i++;
    }
    
    while(j<arr2.length){
        animations.push("comparison1",j,j);
        animations.push("comparison2",j,j);
        results.push(arr2[j]);
        j++;
    }
    return results;
}