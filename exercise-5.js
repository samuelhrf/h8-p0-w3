function palindrome(kata)
{
    var tmp = ''
    for (var i = kata.length - 1; i >= 0 ; i--)
    {
        tmp += kata[i]
    }

    if (tmp == kata){
        return true
    }

    else{
        return false
    }

    return tmp
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false