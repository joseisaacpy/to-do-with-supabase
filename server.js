// importa o cors
const cors = require("cors");

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

// usa o cors
app.use(cors());

// usa o json
app.use(express.json());

// instancia o supabase
const { createClient } = require("@supabase/supabase-js");

// conectar com o supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// rota raiz
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rota para listar todas as tarefas
app.get("/api/todos", async (req, res) => {
  try {
    const { data, err } = await supabase
      .from("todos")
      .select("*")
      .order("created_at", { ascending: false });

    if (err) throw err;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// escuta a porta
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
