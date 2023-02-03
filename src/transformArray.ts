export function transformArray(arr: string[]) {
    let newArr = [];
    for (let element of arr) {
    if (!isNaN(parseFloat(element))) {
    newArr.push(parseFloat(element));
    } else {
    newArr.push(element);
    }
    }
    return newArr;
    }
