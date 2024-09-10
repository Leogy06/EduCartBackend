import { Items } from "../models/items.js";

//regular crud
const getItems = async (req, res) => {
  try {
    const items = await Items.find();

    res.status(200).json({ message: "Items has been sent!", items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const createItem = async (req, res) => {
  try {
    const { name, category, stockQuantity } = req.body;

    const newItemEntry = {
      name,
      category,
      stockQuantity,
    };

    const newItem = await Items.create(newItemEntry);

    res.status(200).json({ message: `${name} has been created!`, newItem });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { item_id } = req.params;

    await Items.findByIdAndDelete(item_id);

    res.status(200).json({ message: "The item has been deleted." });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const { item_id } = req.params;
    const { name, category, stockQuantity } = req.body;

    const editedItemEntry = {
      name: name,
      category: category,
      stockQuantity: stockQuantity,
    };

    const editedItem = await Items.findByIdAndUpdate(item_id, editedItemEntry, {
      new: true,
      upsert: true,
    });

    res.status(200).json({ message: "The item has been edited!", editedItem });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

export { getItems, createItem, deleteItem, updateItem };
