function pasanganTerbesar(num)
{
    var numToString = num.toString()
    var splitString = numToString.split('')

    var angka = []

    for (var i = 0; i < splitString.length - 1; i++)
    {
        
        angka [i] = Number(splitString[i] + splitString[i + 1]) 
        
    }

    var sortAngka = angka.sort(function(a,b){return b-a})

    return sortAngka[0]
   
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99