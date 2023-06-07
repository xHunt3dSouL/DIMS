const express = require("express");
const destinationRoutes = require("./routes/destinationRoutes");
const app = express();

app.use(express.json());

// Define the base API route for destinations
app.use("/api/destinations", destinationRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
