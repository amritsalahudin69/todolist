# todolist app nodejs
Menjawab pertanyaan:
1. Apakah Kegunaan JSON pada REST API?
    jawaban:
        JSON (JavaScript Object Notation) adalah format data yang digunakan untuk pertukaran data antara server dan klien pada aplikasi web. JSON sering digunakan dalam REST API (Representational State Transfer API) sebagai format data yang digunakan dalam permintaan (request) dan respon (response) antara klien dan server.
Berikut adalah beberapa kegunaan JSON pada REST API:
- Format Data: JSON menyediakan format yang ringkas dan mudah dibaca untuk mewakili data dalam bentuk objek dan array. JSON menggunakan struktur key-value yang mirip dengan objek dalam bahasa pemrograman, sehingga memudahkan pengkodean dan dekode data dalam format JSON.
- Pertukaran Data: JSON digunakan untuk mengirim data antara klien dan server dalam REST API. Klien dapat mengirim permintaan ke server dengan menggunakan JSON dalam body permintaan (request body), dan server dapat merespons dengan data dalam format JSON dalam respon (response body).
- Kompatibilitas: JSON mendukung berbagai bahasa pemrograman dan platform, sehingga dapat digunakan dengan mudah dalam berbagai jenis aplikasi web. Hal ini membuat JSON menjadi format yang umum digunakan dalam REST API untuk memastikan interoperabilitas antara berbagai sistem.
- Pembacaan oleh Manusia dan Mesin: JSON memiliki struktur yang mudah dibaca oleh manusia, sehingga memudahkan dalam debug dan pemahaman data yang dikirim dan diterima. Selain itu, JSON juga mudah diproses oleh mesin, seperti parsing dan serialisasi data.
- Fleksibilitas: JSON memungkinkan penggunaan tipe data yang beragam, termasuk string, angka, boolean, array, dan objek. Ini memberikan fleksibilitas dalam mewakili berbagai jenis data dalam REST API.

    
2. Jelaskan bagaimana REST API bekerja?
    jawaban:
    REST API (Representational State Transfer Application Programming Interface) adalah sebuah arsitektur yang digunakan untuk membangun aplikasi web yang dapat berkomunikasi dengan menggunakan protokol HTTP. REST API beroperasi dengan prinsip-prinsip dasar sebagai berikut:
- Arsitektur Berbasis Sumber Daya (Resource-Based Architecture):
   REST API berfokus pada sumber daya (resources) yang direpresentasikan sebagai URL (Uniform Resource Locator). Setiap sumber daya memiliki identifikasi unik (URI) dan dapat direpresentasikan dalam berbagai format data, seperti JSON atau XML.
- Operasi Berbasis Metode HTTP (HTTP Method-Based Operations):
   REST API menggunakan metode HTTP untuk melakukan operasi terhadap sumber daya. Metode HTTP yang umum digunakan dalam REST API adalah:
   - GET: Mengambil data dari sumber daya.
   - POST: Membuat sumber daya baru.
   - PUT: Memperbarui sumber daya yang ada.
   - DELETE: Menghapus sumber daya.
   - PATCH: Memperbarui bagian-bagian tertentu dari sumber daya yang ada.
- Penggunaan Kode Status HTTP (HTTP Status Code Usage):
   REST API menggunakan kode status HTTP untuk memberikan informasi tentang hasil permintaan klien ke server. Beberapa kode status HTTP yang umum digunakan adalah:
   - 200 OK: Permintaan berhasil.
   - 201 Created: Sumber daya baru berhasil dibuat.
   - 400 Bad Request: Permintaan tidak valid atau tidak dapat diproses.
   - 404 Not Found: Sumber daya yang diminta tidak ditemukan.
   - 500 Internal Server Error: Terjadi kesalahan pada server.
- Statelessness:
   REST API dirancang agar tidak menyimpan status (stateless). Ini berarti setiap permintaan klien harus mencakup semua informasi yang diperlukan untuk memahami dan memproses permintaan tersebut. Server tidak menyimpan informasi tentang koneksi sebelumnya dengan klien.
- Representasi Data:
   REST API mengirim dan menerima data dalam format representasi tertentu, seperti JSON atau XML. Data yang dikirim dalam permintaan (request) dan respon (response) REST API direpresentasikan dalam format data yang dapat dimengerti oleh klien dan server.
