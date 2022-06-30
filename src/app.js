const express = require("express");
const app = express();
const MensRanking = require("../src/models/mens");
const router = require("../src/routers/men")

require("../src/db/conn")
const port = process.env.PORT || 3000;


app.use(express.json());

app.use(router);


app.listen(port, () => {
    console.log(`Conenction is live at port no ${port}`);
})