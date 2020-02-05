function hitungJumlahKata(kalimat){
    var split = kalimat.split(' ')
    var result = ''

    for (var i = 1; i <= split.length; i++)
    {
        result = i
    }

    return result
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5