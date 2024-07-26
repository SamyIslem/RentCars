const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCars = async () => {
  const result = await prisma.cars.findMany();
  return result;
};

const createCar = async (user) => {
  const result = await prisma.cars.create({
    data: {
      name: user.name,
      model: user.model,
      id_user: user.id_user,
    },
  });
  return result;
};

const purchasedCar = async () => {
  const result = await prisma.cars.findMany({
    select: {
      id: true,
      name: true,
      model: true,
      user: {
        select: {
          id: true,
          firstname: true,
        },
      },
    },
  });
  return result;
};

/**
 *
 * @param {int} id
 * @returns {{ name, model}} - Its returns the object of the car
 */
const getPurchasedCarsId = async (id) => {
  const result = await prisma.cars.findMany({
    where: {
      id_user: parseInt(id),
    },
    select: {
      id: true,
      name: true,
      model: true,
    },
  });
  return result;
};

/**
 * @returns {{id,firstname,lastname,count }}
 */

const getCountCars = async () => {
  const result = await prisma.users.findMany({
    select: {
      id: true,
      firstname: true,
      lastname: true,
      _count: {
        select: {
          cars: true,
        },
      },
    },
  });
  return result;
};

/**
 *
 * @param {int} id
 * @returns {{firstname,lastname,count }}
 */
const getCountCarsId = async (id) => {
  const result = await prisma.users.findMany({
    where: {
      id: parseInt(id),
    },
    select: {
      firstname: true,
      lastname: true,
      _count: {
        select: {
          cars: true,
        },
      },
    },
  });
  return result;
};

module.exports = {
  getCars,
  createCar,
  purchasedCar,
  getPurchasedCarsId,
  getCountCars,
  getCountCarsId,
};
