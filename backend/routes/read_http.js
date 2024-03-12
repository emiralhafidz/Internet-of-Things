import express from "express";

import {
  fetchDataHttp,
  fetchDataTableHttp,
  fetchDataCardHttp,
} from "../controller/read_http.js";

const router = express.Router();

// Route untuk mengambil data tabel
// router.get("/data", fetchData);

// Route untuk mengambil data untuk kartu
router.get("/dataCardHttp/:column", fetchDataCardHttp);

// Route untuk mengambil data tabel dengan batasan
router.get("/dataTableHttp", fetchDataTableHttp);

export default router;
