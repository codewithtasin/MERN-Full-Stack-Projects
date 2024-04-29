const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const uri = process.env.URI;
console.log(uri);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("The database is connected");
    const db = client.db("Daamekoom_Website");
    const sliderCollection = db.collection("Sliders");
    const productCollection = db.collection("Products");
    const orderCollection = db.collection("Orders");

    // Sliders Management for Database
    app.get("/api/sliders", async (req, res) => {
      const result = await sliderCollection.find().toArray();
      res.send(result);
    });

    // Products Management for Database

    app.get("/api/all-products", async (req, res) => {
      const result = await productCollection.find().toArray();

      res.send(result);
    });

    app.get("/api/latest-products", async (req, res) => {
      const totalProducts = await productCollection.countDocuments();
      let skip = 0;

      if (totalProducts > 10) {
        skip = totalProducts - 10;
      } else {
        skip = 0;
      }

      const result = await productCollection.find().skip(skip).toArray();
      res.send(result);
    });

    // find single product

    app.get("/api/get-one-product/:id", async (req, res) => {
      const { id } = req.params;
      const result = await productCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // Order Management

    app.post("/api/insert-new-order", async (req, res) => {
      const data = req.body;
      const result = await orderCollection.insertOne(data);

      res.send(result);
    });

    // Get all Orders
    app.get("/api/dashboard-orders", async (req, res) => {
      const result = await orderCollection.find().toArray();
      res.send(result);
    });

    // Dashboard Report
    app.get("/api/dashboard-report", async (req, res) => {
      const date = new Date();
      const today = date.toLocaleDateString();
      const condition = { date: today };

      const todaysOrder = (await orderCollection.find(condition).toArray())
        .length;
      const totalProducts = await productCollection.countDocuments();
      const totalOrders = await orderCollection.countDocuments();
      const totalSliders = await sliderCollection.countDocuments();

      const data = {
        todaysOrder,
        totalProducts,
        totalOrders,
        totalSliders,
      };

      res.send(data);
    });

    app.listen(process.env.PORT, () => {
      console.log(`The Server is running on ${process.env.PORT} PORT`);
    });
  } finally {
  }
}
run().catch(console.dir);
