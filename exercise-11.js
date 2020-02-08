function tentukanDeretAritmatika(arr)
{
    var beda = []
    for (var i = 0; i < arr.length-1; i++)
    {
        beda [i] = arr[i+1] - arr[i]
    }

    for (var j = 0; j < beda.length-1; j++)
    {

        if(beda[j] === beda[j+1])
        {
            flag = true
        }

        else if (beda[j] !== beda[j+1])
        {
            flag = false
        }
    }

    return flag
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false