const carServices = require("../services/cars.service");

const getCars = async (req, res) => {
  try {
    const cars = await carServices.getCars();
    res.status(200).json({
      cars,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const createCar = async (req, res) => {
  try {
    const user = await req.body;
    const result = await carServices.createCar(user);
    res.status(200).json({
      result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const purchasedCar = async (req, res) => {
  try {
    const cars = await carServices.purchasedCar();
    res.status(200).json({
      cars,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getPurchasedCarsId = async (req, res) => {
  try {
    const { id } = req.params;
    const cars = await carServices.getPurchasedCarsId(id);
    res.status(200).json({
      success: true,
      cars,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getCountCars = async (req, res) => {
  try {
    const count = await carServices.getCountCars();
    res.status(200).json({
      success: true,
      count,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getCountCarsId = async (req, res) => {
  try {
    const { id } = req.params;
    const countCars = await carServices.getCountCarsId(id);
    res.status(200).json({
      success: true,
      countCars,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getCars,
  createCar,
  purchasedCar,
  getPurchasedCarsId,
  getCountCars,
  getCountCarsId,
};
