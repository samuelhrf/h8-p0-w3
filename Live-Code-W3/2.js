/**
 * Seseorang akan mendaftar paket Indiehome terbaru. Buatlah program untuk menghitung harganya. Untuk mendaftar, dia perlu menyertakan nama, nomor ktp, alamat, serta jenis rumah.
 * Jika nama tidak diisi, program akan mengoutput 'NAMA HARUS DIISI!'.
 * - Jika panjang nomor KTP dibawah 4 angka atau nomor KTP tidak diisi, maka keluarkanlah output
 * 'NOMOR KTP TIDAK VALID'.
 * - Untuk soal ini, terdapat 4 lokasi alamat: 'Jakarta', 'Surabaya', 'Yogyakarta', dan 'Bandung'. Selain keempat alamat tersebut, maka program akan mengeluarkan
 * 'Alamat tidak diketahui'. Saat kalian membuat program, jangan lupa untuk menangani kasus-kasus input kota yang tidak ada dalam daftar.
 * Masing-masing lokasi memiliki harga dasar paket yang berbeda:
 *     - Jakarta   100000
 *     - Surabaya   50000
 *     - Yogyakarta 45000
 *     - Bandung    90000
 * -Jenis rumah ada 3 macam: 'normal', 'large', 'kosan'. Jika jenis rumah tidak ada di dalam ketiga rumah tersebut, program akan mengeluarkan output 'Jenis rumah salah'
 * Masing-masing jenis rumah akan mendapatkan biaya yang berbeda-beda. Namun, jika jenis rumah adalah 'kosan' maka tidak boleh mendaftar ke program ini.
 *     - Biaya 'normal': 30000
 *     - Biaya 'large' : 50000
 * Buatlah program yang akan menghitung biaya total dari paket Indiehome tersebut. Program tersebut akan mengoutput:
 * 'NAMA_PENDAFTAR NO_KTP TOTAL_BIAYA'
 * contoh: 'Rani 10049581293 500000'
 *
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN FUNCTION / METHODS
 * - HANYA diperbolehkan untuk mengambil properties .length dari String
 *
 */

var name = '' // silakan berikan nilai bebas
var nomor_ktp = '' //silahkan berikan nilai bebas
var alamat = '' // bisa diisi dengan alamat Jakarta atau Surabaya atau Yogyakarta atau Bandung selain alamat tersebut silahkan keluarkan output seperti yang diminta
var jenis_rumah = '' //bisa diisi dengan 3 jenis rumah normal atau large atau kosan selain jenis rumah tersebut silahkan keluarkan output seperti yang diminta

//tulislah kode disini

var nama = 'Rani'
var nomor_ktp = '10049581293'
var alamat = 'Jakarta'
var jenis_rumah = 'large'

var hargaPaket = '' // Menampung nilai alamat
var hargaPaket2 = '' // Menampung nilai jenis_rumah


switch (alamat)

{
    case 'Jakarta' : hargaPaket = 100000
    break 
    
    case 'Surabaya' : hargaPaket = 50000
    break

    case 'Yogyakarta' : hargaPaket = 45000
    break

    case 'Bandung' : hargaPaket = 90000
    break
}

switch (jenis_rumah)

{
    case 'normal' : hargaPaket2 = 30000
    break 
    
    case 'large' : hargaPaket2 = 50000
    break

}

if (nama === '')
{
    console.log ('NAMA HARUS DIISI')
}

else if (nomor_ktp.length < 4 && nomor_ktp === '')
{
    console.log ('NOMOR KTP TIDAK DIISI')
}

else if (alamat !== 'Jakarta' && alamat !== 'Surabaya' && alamat !== 'Yogyakarta' && alamat !== 'Bandung')
{
    console.log ('Alamat Tidak Diketahui')
}

else if (jenis_rumah !== 'normal' && jenis_rumah !== 'large' && jenis_rumah !== 'kosan')
{
    console.log ('Jenis Rumah Salah')
}

else if (jenis_rumah == 'kosan')
{
    console.log ('Anda Tidak Boleh Mendaftar di Program Ini')
}

else{

console.log ( nama + ' ' + nomor_ktp + ' ' + (hargaPaket + hargaPaket2))

}
