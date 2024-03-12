import express from "express";
import cors from "cors";

import loginRoutes from "./routes/login.js";
import readRoutesHttp from "./routes/read_http.js";
import readRoutesMqtt from "./routes/read_mqtt.js";
import sendRoutes from "./routes/send_http.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use(loginRoutes);
app.use(readRoutesHttp);
app.use(readRoutesMqtt);
app.use(sendRoutes);

app.listen(port, () => {
  console.log(`server sedang berjalan di port ${port}`);
});
