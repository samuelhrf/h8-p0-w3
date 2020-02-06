/**
 * 
 * ================
 * 2 Digit Oddities
 * ================
 * 
 * '1234987566710'
 * 
 * 
 * Pada program ini, kalian harus mengimplementasikan function oddFinder() yang menerima input berupa 'string' berisi angka.
 * String ini pasti diisi oleh angka dan tidak akan diisi oleh huruf/karakter lainnya.
 * Untuk setiap angka 2 digit yang bisa dibentuk dari kiri ke kanan, carilah angka ganjil yang paling besar.
 * Jika tidak ada angka ganjil di dalam string tersebut, maka function akan return 'Tidak ada yang ganjil'
 * 
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN METHOD / FUNCTION KECUALI Number .parseInt
 * - HARUS MENULIS PSEUDOCODE / ALGORITMA, TIDAK MENULIS = 0!
 */

/*Algoritma
1. Buat function oddFinder dengan parameter string.
2. Di dalam function, buat looping for yang akan mengambil setiap dua angka dalam string serta mengubahnya ke dalam bentuk number, hasil looping akan diberikan kepada variabel angka yang akan menampung sebuah nilai dalam Array.
3. Buat variabel k dengan nilai sama dengan 0 dan variabel bilGanjil yang akan menampung sebuah nilai dalam Array.
4. Buat looping for dimana variabel bilGanjil hanya akan menampung angka ganjil dari variabel "angka".
5. Buat variabel maxGanjil dengan nilai sama dengan bilGanjil pada indeks ke - 0.
6. Buat kondisi looping for yang akan mencari nilai angka ganjil terbesar dari bilGanjil yang akan ditampung ke dalam variabel maxGanjil dan tampilkan nilai angka ganjil terbesar.
7. Jika nilai dari maxGanjil sama dengan null, maka tampilkan "Tidak ada yang ganjil"*/

function oddFinder(string) {
   //tulis kode disini

    var angka = []

    for (var i = 0; i < string.length - 1; i++)
    {
        
        angka[i] = Number(string[i] + string[i + 1]) 
        
    }

    var k = 0
    var bilGanjil = []
    for (var j = 0; j < angka.length -1; j++ )
    {
       
       if(angka[j] % 2 !== 0)
       {
          bilGanjil [k] = angka[j]
          k++
       }
    }

    var maxGanjil = bilGanjil[0]
    
    for (var l = 0; l < bilGanjil.length - 1; l++)
    {
       if (maxGanjil < bilGanjil[l])
       {
          maxGanjil = bilGanjil[l]
       }
    }

    if (maxGanjil == null)
    {
       maxGanjil = 'Tidak ada yang ganjil'
    }

    return maxGanjil

}

console.log(oddFinder('1234987566710')); //87
console.log(oddFinder('246804422')); //Tidak ada yang ganjil