const { Kafka } = require('kafkajs');


exports.sendToKafka = async(req, res, next) =>{
  try {
    const kafka = new Kafka({
      clientId: 'Agent',
      brokers: ['localhost:9092'],
    });

    const producer = kafka.producer();
    await producer.connect();

    const message = {
      value: JSON.stringify(req.body),
    };

    await producer.send({
      topic: 'booking',
      messages: [message],
    });

    await producer.disconnect();
    console.log('Pesan berhasil di broadcast to membered topic');
    next();
  } catch (error) {
    console.error('Error occurred while producing Kafka message:', error);
    res.status(500).json({ error: 'An error occurred while sending data to Kafka' });
  }
}