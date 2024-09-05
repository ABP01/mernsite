const express = require("express");
const app = express();
const port = 4000;

app.get("/", (_, res) => {
    res.send("Hello Express!!!")
})

app.listen(port, () => {
    console.log(`Serveur démaré avec succès sur le port : ${port}`);
}) 