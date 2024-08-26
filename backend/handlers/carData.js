const Car = require("../models/car");

async function getData(req, res) {
  try {
    const { location } = req.body;

    const cars = await Car.find({ location }).lean();

    // console.log([cars]);
    res.json({ data: cars });
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

module.exports = {
  getData,
};
