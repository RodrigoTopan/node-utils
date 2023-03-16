const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(client);

producer.on('ready', function() {
  const message = { value: 'Hello Kafka!' };
  const buffer = Buffer.from(JSON.stringify(message));
  const payloads = [{ topic: 'my-topic', messages: buffer }];

  producer.send(payloads, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
});

producer.on('error', function(err) {
  console.error(err);
});