const express = require("express");
const router = express.Router();
const destinationController = require("../controllers/destinationController");

router.get("/", destinationController.getAllDestinations);
router.get("/:id", destinationController.getDestinationById);
router.get(
  "/category/:category",
  destinationController.getDestinationsByCategory
);
router.post("/", destinationController.createDestination);
router.put("/:id", destinationController.updateDestination);
router.delete("/:id", destinationController.deleteDestination);

module.exports = router;
