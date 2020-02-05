function angkaPalindrome(num)
{
    while (true){
        num ++
        var n = num.toString()
        var tmp = ''
        
            for (var i = n.length - 1; i >= 0 ; i--)
                {
                    tmp += n[i]
                }
        
                if(tmp === n){
                    return Number(n)
                }

    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001