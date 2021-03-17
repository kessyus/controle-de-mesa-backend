// imports
const express = require("express");
const cors = require("cors");
const router = require("./api/routes");

// variable
const port = process.env.PORT || 3001;

// starting app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

router(app);

app.listen(port, () => {
  console.log(`↖(^▽^)↗ Server starded at http://localhost:${port}/`);
});

