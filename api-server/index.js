const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let cart = [];

/* ===================== PRODUCTS ===================== */
app.get("/api/products", (req, res) => {
  const products = [
    {
      productID: "001",
      productTitle: "Samsung Tab",
      productDescription: "Description du produit",
      productImage: "samsung-tab-12.png",
      category: "tablet",
      productPrice: 2400,
    },
    {
      productID: "002",
      productTitle: "IPhone 17",
      productDescription: "Description du produit",
      productImage: "iphone-17.png",
      category: "phone",
      productPrice: 17000,
    },
    {
      productID: "003",
      productTitle: "IPad",
      productDescription: "Description du produit",
      productImage: "ipadtab.png",
      category: "tablet",
      productPrice: 3500,
    },
    {
      productID: "004",
      productTitle: "Smart TV 48 Pouce",
      productDescription: "Description du produit",
      productImage: "tv-samsung-48.png",
      category: "smarttv",
      productPrice: 9500,
    },
    {
      productID: "005",
      productTitle: "Samsung Ultra",
      productDescription: "Description du produit",
      productImage: "samsungultraa.png",
      category: "phone",
      productPrice: 15000,
    },
    {
      productID: "006",
      productTitle: "LG Smart TV 48 Pouce",
      productDescription: "Description du produit",
      productImage: "Lgtv.png",
      category: "smarttv",
      productPrice: 18000,
    },
  ];

  res.json(products);
});

/* ===================== CART ===================== */
app.post("/api/cart", (req, res) => {
  cart = req.body;
  res.status(201).json({ message: "Cart updated successfully" });
});

app.get("/api/cart", (req, res) => {
  res.json(cart);
});

const users = {
  "mouadmounad@test.com": {
    userId: 1,
    firstName: "mouad",
    lastName: "mounad",
    email: "mouadmounad@test.com",
    password: "0000",
  }
};

app.post("/api/signin", (req, res) => {
  const { email, password } = req.body;
  const user = users[email];

  if (user && user.password === password) {
    res.status(200).json({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).json({ message: "Invalid user credentials" });
  }
});

/* ===================== SERVER ===================== */
const port = 3000;
app.listen(port, () => {
  console.log(`✅ API Server listening on port ${port}`);
});


