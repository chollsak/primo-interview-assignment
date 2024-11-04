export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    
    let mergedArray: number[] = []
    let c1_index: number = 0
    let c2_index: number = 0
    let c3_index: number = 0

    while (c1_index < collection_1.length && c2_index < collection_2.length) {
        if (collection_1[c1_index] < collection_2[c2_index]) {
            mergedArray.push(collection_1[c1_index])
            c1_index += 1
        } else {
            mergedArray.push(collection_2[c2_index])
            c2_index += 1
        }
    }

    while (c1_index < collection_1.length) {
        mergedArray.push(collection_1[c1_index])
        c1_index += 1
    }

    while (c2_index < collection_2.length) {
        mergedArray.push(collection_2[c2_index])
        c2_index += 1
    }

    while(c3_index < collection_3.length){
        let inserted: boolean = false
        for(let i = 0; i < mergedArray.length; i++){
            if(collection_3[c3_index] <= mergedArray[i]){
                mergedArray.splice(i, 0, collection_3[c3_index])
                inserted = true
                break
            }
        }

        if(!inserted){
            mergedArray.push(collection_3[c3_index])
        }

        c3_index += 1
    }

    return mergedArray;
}

const collection_1 = [1, 3, 5];
const collection_2 = [2, 4, 6];
const collection_3 = [9, 7, 5];

console.log(merge(collection_1, collection_2, collection_3));
