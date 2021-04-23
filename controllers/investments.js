const Investment = require("../models/investment");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getInvestments = async (req, res) => {
  try {
    const investments = await Investment.find();
    res.json(investments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInvestment = async (req, res) => {
  try {
    const { id } = req.params;
    const investment = await Investment.findById(id);
    if (investment) {
      return res.json(investment);
    }
    res.status(404).json({ message: "Product not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createInvestment = async (req, res) => {
  try {
    const investment = await new Investment(req.body);
    await investment.save();
    res.status(201).json(investment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateInvestment = async (req, res) => {
  const { id } = req.params;
  await Investment.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, investment) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!investment) {
        return res.status(404).json({ message: "Investment not found!" });
      }
      res.status(200).json(investment);
    }
  );
};

const deleteInvestment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Investment.findOneAndDelete(id);
    if (deleted) {
      return res.status(200).send("Investment deleted");
    }
    throw new Error("Investment not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createInvestment,
  getInvestments,
  getInvestment,
  updateInvestment,
  deleteInvestment,
};
