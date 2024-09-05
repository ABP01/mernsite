import express from "express";
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 4000;


const uri = "mongodb+srv://komlanbogue:Jolieabp2005@mernsite.4j0q1.mongodb.net/?retryWrites=true&w=majority&appName=mernsite";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.get("/", (_, res) => {
  res.send("Hello Express!!!")
})

app.listen(port, () => {
  console.log(`Serveur démaré avec succès sur le port : ${port}`);
})