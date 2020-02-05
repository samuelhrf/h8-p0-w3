function balikString(kata){
    var split = kata.split('')
    var result = ''
    
    for (var i = split.length - 1; i >= 0 ; i--)
    {
        result += split[i]
    }

    return result
}

console.log(balikString('hello world!'))