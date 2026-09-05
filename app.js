const express = require("express");
const mysql = require("mysql2");

const app = express();

// Configuração da conexão com o MySQL (container Docker)
const db = mysql.createConnection({
  host: "localhost",       // ou "mysql-container" se rodar dentro de outro container
  user: "user",            // definido no docker-compose
  password: "userpassword",// definido no docker-compose
  database: "conversoes_db"
});

// Conectar ao banco
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL.");
});

// Endpoint para converter decimal → binário e salvar no banco
app.get("/to-binary/:decimal", (req, res) => {
  
const decimal = parseInt(req.params.decimal, 10);

if (isNaN(decimal)) {
  return res.status(400).json({ error: "Número decimal inválido" });
}

const binary = decimal.toString(2);

  // Inserir no banco
  const query = "INSERT INTO conversoes (numero_decimal, numero_binario) VALUES (?, ?)";
  db.query(query, [decimal, binary], (err, result) => {
  if (err) {
    console.error("Erro ao salvar no banco:", err); // 👈 mostra o erro completo
    return res.status(500).json({ error: "Erro ao salvar no banco de dados" });
  }
  res.json({ id: result.insertId, decimal, binary });
});
});

// Exemplo de outra rota já existente (hexadecimal)
app.get("/to-hex/:decimal", (req, res) => {
  const decimal = parseInt(req.params.decimal, 10);

  if (isNaN(decimal)) {
    return res.status(400).json({ error: "Número decimal inválido" });
  }

  const hex = decimal.toString(16).toUpperCase();
  res.json({ decimal, hex });
});

module.exports = app;
