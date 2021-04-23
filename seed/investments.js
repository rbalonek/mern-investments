const db = require("../db/connection");
const Investment = require("../models/investment");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const investments = [
    {
      name: "Foundation Holdings",
      imgURL:
        "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1619206990/MERN%20Investment/Companies/inv3_ltqruz.png",
      description:
        "Foundation Holdings is a company that is Lorem Ipsum Finishum",
      price: "150",
    },
    {
      name: "Alpha Invest",
      imgURL:
        "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1619206973/MERN%20Investment/Companies/Inv2_bucfa0.png",
      description:
        "Alpha Invest ist Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "100",
    },
    {
      name: "Investment Solutions",
      imgURL:
        "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1619206956/MERN%20Investment/Companies/investment1_g8mjw2.jpg",
      description:
        "Investment Solutions, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "130",
    },
  ];

  await Investment.insertMany(investments);
  console.log("Investments Created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
