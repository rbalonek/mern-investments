const { Router } = require("express");
//const controllers = require("../controllers/users");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/", (req, res) => {
  /// To Test /// res.send("register");
  const { name, email, password } = req.body;
  //simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //25:13
  //check for existing user
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists!" });

    const newUser = new User({
      name,
      email,
      password,
    });

    //Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          ///Token Lasts an hour
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

// router.get("/users", controllers.getInvestments);
// router.get("/users/:id", controllers.getInvestment);
// router.post("/users", controllers.createInvestment);
// router.put("/users/:id", controllers.updateInvestment);
// router.delete("/users/:id", controllers.deleteInvestment);

module.exports = router;
