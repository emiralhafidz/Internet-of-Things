#include <ESP8266WiFi.h>
#include <PubSubClient.h>

// Konfigurasi WiFi
const char* ssid = "burjogober";
const char* password = "cotobabat";

// Konfigurasi MQTT
const char* mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;
const char* mqtt_topic = "sensor_topic";

// Deklarasi objek WiFi dan MQTT Client
WiFiClient espClient;
PubSubClient client(espClient);

void setup_wifi() {
  delay(10);
  // Menghubungkan ke WiFi
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  // Loop sampai terhubung ke MQTT broker
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Jika berhasil terhubung:
    if (client.connect("ESP8266Client")) {
      Serial.println("connected");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Tunggu 5 detik sebelum mencoba kembali
      delay(5000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Baca nilai dari sensor analog
  int sensor1 = random(10,90);
  int sensor2 = random(10,90);

  // Buat payload dalam format JSON
  String payload = "{\"mqtt1\": " + String(sensor1) + ", \"mqtt2\": " + String(sensor2)+"}";

  // Kirim payload sensor ke MQTT broker
  Serial.print("Sensor mqtt1: ");
  Serial.println(sensor1);
  Serial.print("Sensor mqtt2: ");
  Serial.println(sensor2);
  client.publish(mqtt_topic, payload.c_str());

  // Tunggu 1 detik sebelum membaca sensor lagi
  delay(1000);
}
