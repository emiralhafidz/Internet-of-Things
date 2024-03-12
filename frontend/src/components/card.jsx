import React, { useEffect, useState } from "react";
// import { dataCard } from "./dummyData";
import axios from "axios";

const Card = () => {
  const [http_sensor1, setHttp_sensor1] = useState("");
  const [http_sensor2, setHttp_sensor2] = useState("");
  const [mqtt_sensor1, setMqtt_sensor1] = useState("");
  const [mqtt_sensor2, setMqtt_sensor2] = useState("");
  const [coap_sensor1, setCoap_sensor1] = useState("");
  const [coap_sensor2, setCoap_sensor2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url1 = "http://localhost:5000/dataCard/http_sensor1";
        const response1 = await axios.get(url1);
        if (response1.data.length > 0) {
          setHttp_sensor1(response1.data[0].http_sensor1);
        }
        const url2 = "http://localhost:5000/dataCard/http_sensor2";
        const response2 = await axios.get(url2);
        if (response2.data.length > 0) {
          setHttp_sensor2(response2.data[0].http_sensor2);
        }
        const url3 = "http://localhost:5000/dataCard/mqtt_sensor1";
        const response3 = await axios.get(url3);
        if (response3.data.length > 0) {
          setMqtt_sensor1(response3.data[0].mqtt_sensor1);
        }
        const url4 = "http://localhost:5000/dataCard/mqtt_sensor2";
        const response4 = await axios.get(url4);
        if (response4.data.length > 0) {
          setMqtt_sensor2(response4.data[0].mqtt_sensor2);
        }
        const url5 = "http://localhost:5000/dataCard/coap_sensor1";
        const response5 = await axios.get(url5);
        if (response5.data.length > 0) {
          setCoap_sensor1(response5.data[0].coap_sensor1);
        }
        const url6 = "http://localhost:5000/dataCard/coap_sensor2";
        const response6 = await axios.get(url6);
        if (response6.data.length > 0) {
          setCoap_sensor2(response6.data[0].coap_sensor2);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch data for the first time

    const intervalId = setInterval(fetchData, 1000); // Fetch data every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="cardWrapper">
          <div className="card">
            <div className="head">http_sensor1</div>
            <div className="body">{http_sensor1}</div>
          </div>
          <div className="card">
            <div className="head">http_sensor2</div>
            <div className="body">{http_sensor2}</div>
          </div>
          <div className="card">
            <div className="head">mqtt_sensor1</div>
            <div className="body">{mqtt_sensor1}</div>
          </div>
          <div className="card">
            <div className="head">mqtt_sensor2</div>
            <div className="body">{mqtt_sensor2}</div>
          </div>
          <div className="card">
            <div className="head">coap_sensor1</div>
            <div className="body">{coap_sensor1}</div>
          </div>
          <div className="card">
            <div className="head">coap_sensor2</div>
            <div className="body">{coap_sensor2}</div>
          </div>
      </div>
    </>
  );
};

export default Card;
