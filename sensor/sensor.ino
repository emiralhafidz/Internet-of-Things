#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char *ssid = "burjogober";
const char *password = "cotobabat";
const char *serverUrl = "http://192.168.43.216:5000/send";

void setup() {
  Serial.begin(115200);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
}

void loop() {
  // Baca nilai sensor (gantilah dengan metode membaca sensor yang sesuai)
  int sensor1 = random(10, 90);
  int sensor2 = random(10, 90);

  // Kirim data ke server menggunakan metode GET
  String urlWithData = String(serverUrl) + "?http_sensor1=" + String(sensor1) + "&http_sensor2=" + String(sensor2) ;

  HTTPClient http;
  WiFiClient client;

  http.begin(client, urlWithData);

  int httpResponseCode = http.GET();

  if (httpResponseCode > 0) {
    Serial.print("Data terkirim. Response code: ");
    Serial.println(httpResponseCode);
  } else {
    Serial.print("Gagal mengirim data. Error code: ");
    Serial.println(httpResponseCode);
  }

  http.end();
  Serial.println(sensor1);
  Serial.println(sensor2);

  delay(1000);  // Kirim data setiap 1 detik
}
