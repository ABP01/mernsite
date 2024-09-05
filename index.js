const express = require("express");
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`Serveur démaré avec succès sur le port : ${port}`);
}) 