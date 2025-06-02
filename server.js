// importa o path
const path = require("path");

// importa o fs
const fs = require("fs");

// importa o express
const express = require("express");

// importa o dotenv
require("dotenv").config();

// instancia o express
const app = express();

// define a porta
const port = 3000;

// rota raiz
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// rota para conectar com o supabase(para buscar os dados)
app.get("/api/todos", async (req, res) => {
  // faz a conexão com o supabase
});

// escuta a porta
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
