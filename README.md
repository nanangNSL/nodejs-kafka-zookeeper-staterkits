<!DOCTYPE html>
<html>
<body>
  <h1>Panduan Instalasi Node.js dengan Kafka dan ZooKeeper</h1>
  <h2>Persyaratan</h2>
  <p>
    Sebelum memulai instalasi, pastikan Anda telah memenuhi persyaratan berikut:
  </p>
  <ul>
    <li>Node.js - Versi 10 atau yang lebih baru</li>
    <li>Kafka - Versi 2.0.0 atau yang lebih baru</li>
    <li>ZooKeeper - Versi 3.4.0 atau yang lebih baru</li>
  </ul>
  <h2>Langkah-langkah Instalasi</h2>
  <h3>1. Instalasi Node.js</h3>
  <p>
    Langkah pertama adalah menginstal Node.js. Berikut adalah instruksi instalasi untuk sistem operasi yang berbeda:
  </p>
  <ul>
    <li>Windows: <code>https://nodejs.org/en/download/</code></li>
    <li>Linux: Jalankan perintah berikut di terminal: <code>sudo apt-get install nodejs</code></li>
    <li>Mac: <code>brew install node</code></li>
  </ul>
  <h3>2. Instalasi Kafka</h3>
  <p>
    Setelah menginstal Node.js, langkah selanjutnya adalah menginstal Kafka. Berikut adalah instruksi instalasi untuk sistem operasi yang berbeda:
  </p>
  <ul>
    <li>Windows:
      <ol>
        <li>Unduh Kafka dari situs resmi: <code>https://kafka.apache.org/downloads</code></li>
        <li>Ekstrak file yang telah diunduh.</li>
        <li>Atur variabel lingkungan <code>KAFKA_HOME</code> untuk menunjuk ke direktori Kafka yang diekstrak.</li>
        <li>Ikuti instruksi resmi Kafka untuk memulai ZooKeeper dan server Kafka.</li>
      </ol>
    </li>
    <li>Linux:
      <ol>
        <li>Jalankan perintah berikut di terminal: <code>sudo apt-get install kafka</code></li>
        <li>Ikuti instruksi resmi Kafka untuk memulai ZooKeeper dan server Kafka.</li>
      </ol>
    </li>
    <li>Mac: Jalankan perintah berikut di terminal: <code>brew install kafka</code></li>
  </ul>
  <h3>3. Instalasi ZooKeeper</h3>
  <p>
    Terakhir, instalasi ZooKeeper diperlukan untuk menjalankan Kafka. Berikut adalah instruksi instalasi untuk sistem operasi yang berbeda:
  </p>
  <ul>
    <li>Windows:
      <ol>
        <li>Unduh ZooKeeper dari situs resmi: <code>https://zookeeper.apache.org/releases.html</code></li>
        <li>Ekstrak file yang telah diunduh.</li>
        <li>Atur variabel lingkungan <code>ZOOKEEPER_HOME</code> untuk menunjuk ke direktori ZooKeeper yang diekstrak.</li>
        <li>Ikuti instruksi resmi ZooKeeper untuk memulai ZooKeeper server.</li>
      </ol>
    </li>
    <li>Linux: Jalankan perintah berikut di terminal: <code>sudo apt-get install zookeeper</code></li>
    <li>Mac: Jalankan perintah berikut di terminal: <code>brew install zookeeper</code></li>
  </ul>
  <h2>Selesai</h2>
  <p>
    Setelah mengikuti langkah-langkah di atas, Anda sekarang harus memiliki Node.js, Kafka, dan ZooKeeper terinstal dengan baik di sistem Anda.
  </p>
</body>
</html>
