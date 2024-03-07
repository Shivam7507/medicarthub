const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Shopify = require("shopify-api-node");

const shopify = new Shopify({
  shopName: "medmarketplace", // Replace with your actual shop name
  apiKey: "a45cfb770c24c8cbd4b725bd0177e8a8",
  password: "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",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Our app is running...</h1>");
});

app.post("/add-product", async (req, res) => {
  const { title, price, description } = req.body;

  try {
    const product = await shopify.product.create({
      title,
      body_html: description,
      variants: [{ price }],
    });

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}...`);
});
