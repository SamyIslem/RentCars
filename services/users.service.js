const { PrismaClient } = require("@prisma/client");
var bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const getUsers = async () => {
  const result = await prisma.users.findMany();
  return result;
};

// const createUser = async (user) => {
//   bcrypt.genSalt(10, function (err, salt) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     bcrypt.hash(user.password, salt, function (err, hash) {
//       if (err) {
//         console.log("Une erreur d'est produite");
//         return;
//       }
//       const mot_de_passe = hash;
//     });
//   });

//   const result = await prisma.users.create({
//     data: {
//       email: user.email,
//       password: hash,
//     },
//   });
//   return result;
// };

const createUser = async (user) => {
  var salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT));
  var hash = bcrypt.hashSync(user.password, salt);

  // throw new Error("Error test!")

  const result = await prisma.users.create({
    data: {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: hash,
    },
  });
  return result;
};

const deleteUser = async (id) => {
  console.log(id);
  const result = await prisma.users.delete({
    where: {
      id: parseInt(id),
    },
  });
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
};
