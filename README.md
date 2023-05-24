## Panduan Instalasi Node.js Kafka
Repository ini berisi stater kit untuk menggunakan Node.js dengan Apache Kafka dan Apache ZooKeeper. Panduan ini akan memberikan instruksi langkah demi langkah untuk menginstal dan menjalankan aplikasi ini.

## Prasyarat
Sebelum memulai instalasi, pastikan Anda telah memenuhi prasyarat berikut:

> Node.js telah terinstal di sistem Anda. Anda dapat mengunduh versi terbaru dari https://nodejs.org.
Kafka dan ZooKeeper telah terinstal dan dikonfigurasi dengan benar. Anda dapat mengikuti panduan instalasi resmi di https://kafka.apache.org untuk menginstal Kafka dan ZooKeeper.
Langkah 1: Clone Repository
Pertama, clone repositori nodejs-kafka-zookeeper-staterkits ke mesin Anda dengan menjalankan perintah berikut:

shell
Copy code
`code` git clone https://github.com/nanangNSL/nodejs-kafka-zookeeper-staterkits.git
Setelah itu, pindah ke direktori proyek:

shell
Copy code
`code` cd nodejs-kafka-zookeeper-staterkits
Langkah 2: Instalasi Dependensi
Selanjutnya, instal dependensi proyek dengan menjalankan perintah berikut:

shell
Copy code
`code` npm install
Ini akan mengunduh dan menginstal semua dependensi yang diperlukan untuk proyek ini.

Langkah 3: Konfigurasi
Pada langkah ini, Anda perlu mengkonfigurasi koneksi Kafka dan ZooKeeper. Buka file config.js di direktori proyek dan perbarui konfigurasi sesuai dengan konfigurasi Kafka dan ZooKeeper yang ada di sistem Anda.

javascript
Copy code
`code` module.exports = {
  kafka: {
    // Konfigurasi Kafka
    kafkaHost: 'localhost:9092', // Ganti dengan alamat dan port Kafka Anda
    topic: 'test-topic' // Ganti dengan topik Kafka yang ingin Anda gunakan
  },
  zookeeper: {
    // Konfigurasi ZooKeeper
    connectionString: 'localhost:2181' // Ganti dengan alamat dan port ZooKeeper Anda
  }
};
Pastikan untuk memperbarui kafkaHost, topic, dan connectionString sesuai dengan konfigurasi Kafka dan ZooKeeper di sistem Anda.

Langkah 4: Menjalankan Aplikasi
Setelah mengkonfigurasi proyek, Anda dapat menjalankan aplikasi Kafka dengan menjalankan perintah berikut:

shell
Copy code
`code` node producer.js
Ini akan memulai produser Kafka yang akan mengirimkan pesan ke topik yang ditentukan.

Untuk menjalankan konsumen Kafka, buka terminal baru dan jalankan perintah berikut:

shell
Copy code
`code` node consumer.js
Ini akan memulai konsumen Kafka yang akan menerima pesan dari topik yang ditentukan.
