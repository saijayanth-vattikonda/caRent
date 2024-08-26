const Car = require("../models/car");

async function addCar(req, res) {
  const { name, description, transmission, fuel, model, price, location } =
    req.body;

  try {
    const response = await Car.create({
      name,
      description,
      transmission,
      fuel,
      model,
      price,
      location,
    });
    console.log("Car Added Successfully: ", response);
    return res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addCar,
};
