
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');






const conversor = require("./routes/conversor");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", conversor);
app.use(cors)
const server = require("http").createServer(app);
 const PORT = 3000; // Porta desejada
server.listen( 3000);
