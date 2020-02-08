function tentukanDeretGeometri(arr)
{
    var beda = []
    for (var i = 0; i < arr.length-1; i++)
    {
        beda [i] = arr[i+1] / arr[i]
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

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false