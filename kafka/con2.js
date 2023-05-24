const { Kafka } = require('kafkajs');

// Konfigurasi Kafka
const kafka = new Kafka({
  clientId: 'ADE',
  brokers: ['localhost:9092']
});

// Buat instance konsumen Kafka
const consumer = kafka.consumer({ groupId: 'ADE Group' });

// Fungsi utama untuk mengonsumsi pesan
const consumeMessages = async () => {
  // Tunggu konsumen terhubung ke broker
  await consumer.connect();

  // Langganan topik "my-topic"
  await consumer.subscribe({ topic: 'booking', fromBeginning: true });

  // Mulai mengonsumsi pesan
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Menerima pesan dari topisk ${topic}, partisi ${partition}: ${message.value}`);
    },
  });
};

// Jalankan fungsi untuk mengonsumsi pesan
consumeMessages();
