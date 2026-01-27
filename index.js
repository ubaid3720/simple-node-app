require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;
const environment = process.env.NODE_ENV;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the our API server!",
  });
});

app.get("/userss", (req, res) => {
  res.json([
    {
      name: "Adeel Solangi",
      language: "Sindhi",
      id: "V59OF92YF627HFY0",
      bio: "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
      version: 6.1,
    },
    {
      name: "Afzal Ghaffar",
      language: "Sindhi",
      id: "ENTOCR13RSCLZ6KU",
      bio: "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
      version: 1.88,
    },
    {
      name: "Aamir Solangi",
      language: "Sindhi",
      id: "IAKPO3R4761JDRVG",
      bio: "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
      version: 7.27,
    },
  ]);
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Server running on http://localhost:${PORT} and environment is ${environment}`,
  );
});
