import express from "express";
import {
  fetchDataMqtt,
  fetchDataTableMqtt,
  fetchDataCardMqtt,
} from "../controller/read_mqtt.js";

const router = express.Router();

// Route untuk mengambil data tabel
// router.get("/data", fetchData);

// Route untuk mengambil data untuk kartu
router.get("/dataCardMqtt/:column", fetchDataCardMqtt);

// Route untuk mengambil data tabel dengan batasan
router.get("/dataTableMqtt", fetchDataTableMqtt);

export default router;
