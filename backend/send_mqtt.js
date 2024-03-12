import mqtt from "mqtt";
import { db } from "./connection.js";

// Konfigurasi MQTT
const mqttConfig = {
  broker: "mqtt://broker.hivemq.com",
  topic: "sensor_topic",
};

// Koneksi ke MQTT Broker
const client = mqtt.connect(mqttConfig.broker);

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe(mqttConfig.topic);
});

// Menangani pesan yang diterima
client.on("message", (topic, message) => {
  const payload = JSON.parse(message.toString());
  // Ubah sesuai struktur payload sensor Anda

  // Simpan data ke dalam database MySQL
  const insertQuery = `INSERT INTO mqtt (mqtt_sensor1, mqtt_sensor2, timestamp) VALUES ('${payload.mqtt1}', '${payload.mqtt2}', NOW())`;
  db.query(insertQuery, (err, results) => {
    if (err) {
      console.error("Error saving data to MySQL:", err);
      return;
    }
    console.log("Data tersimpan:", payload);
  });
});
