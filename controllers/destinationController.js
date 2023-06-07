const Destination = require("../models/destinationModel");

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.getAll();
    res.json(destinations);
  } catch (error) {
    console.error("Error retrieving destinations:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getDestinationById = async (req, res) => {
  const { id } = req.params;
  try {
    const destination = await Destination.getById(id);
    if (!destination) {
      return res.status(404).json({ error: "Destination not found" });
    }
    res.json(destination);
  } catch (error) {
    console.error("Error retrieving destination:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getDestinationsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const destinations = await Destination.getByCategory(category);
    res.json(destinations);
  } catch (error) {
    console.error("Error retrieving destinations by category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createDestination = async (req, res) => {
  const { name, description, category } = req.body;
  try {
    const destination = await Destination.create(name, description, category);
    res.status(201).json(destination);
  } catch (error) {
    console.error("Error creating destination:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateDestination = async (req, res) => {
  const { id } = req.params;
  const { name, description, category } = req.body;
  try {
    const updatedDestination = await Destination.update(
      id,
      name,
      description,
      category
    );
    if (!updatedDestination) {
      return res.status(404).json({ error: "Destination not found" });
    }
    res.json(updatedDestination);
  } catch (error) {
    console.error("Error updating destination:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteDestination = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDestination = await Destination.delete(id);
    if (!deletedDestination) {
      return res.status(404).json({ error: "Destination not found" });
    }
    res.json(deletedDestination);
  } catch (error) {
    console.error("Error deleting destination:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
