/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here

Algorithm
1. Buat variabel Nama, tahunKelahiran, statusPelajar, umur, hargaTiket.
2. Pada variabel umur hitung 2020 - tahunKelahiran dan tampung hasil umur
3. Jika statusPelajar sama dengan 'pelajar' maka hasilnya 'true' jika bukan maka hasilnya 'false' dan lanjut ke langkah 4.
4. Jika umur < 2 maka 'HARGA TIKET GRATIS' ditambahkan pada variabel hargaTiket, jika tidak maka lanjut ke langkah 5.
5. Jika umur >= 2 dan umur <=10 maka 'Rp. 25.000.' ditambahkan pada variabel hargaTiket, jika bukan maka lanjut ke langkah 6.
6. Jika umur >= 11 dan umur <=18 dan statusPelajar sama dengan 'true' maka '37.500' ditambahkan pada variabel hargaTiket.
7. Jika umur >= 11 dan umur <=18 dan statusPelajar sama dengan 'false' maka '31.250' ditambahkan pada variabel hargaTiket. 
8. Jika umur >= 19 statusPelajar sama dengan 'true' maka '50.000' ditambahkan pada variabel hargaTiket.
9. Jika umur >= 19 statusPelajar sama dengan 'false' maka '37.500' ditambahkan pada variabel hargaTiket.
10. Jika umur > 120 atau tahunKelahiran < 1900 maka hasilnya 'Invalid Age'
11. Setelah kondisi 3-9 terpenuhi tampilkan output dengan memanggil variabel Nama + hargaTiket. 


