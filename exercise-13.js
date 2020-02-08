function targetTerdekat(arr)
{
    var o = []
    var x = []

    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] === 'x')
        {
            x.push(i)
        }

        else if (arr[i] === 'o')
        {
            o.push(i)
        }
    }

    var hasilKurang = []
    
    for (var j = 0; j < o.length; j++ )
        for (var k = 0; k < x.length; k++)
        {
            hasilKurang.push(Math.abs(x[k] - o[j]))
        }
    
    var min = Number.POSITIVE_INFINITY

    for (var l = 0; l < hasilKurang.length; l++)
    {
        if (hasilKurang[l]<min)
        {
            
            min = hasilKurang[l]

        }
        
    }

    if (min === Number.POSITIVE_INFINITY)
        {
            min = 0
        }

    return min

}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2