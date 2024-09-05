import express from "express";
import dotenv from "dotenv";
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 4000;

dotenv.config();


const uri = process.env.STRING_URI;

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