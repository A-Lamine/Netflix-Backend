const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const configs = require("../configs");

exports.register = (req, res) => {
    
/*     User.findOne({ email: req.body.email })
        .then((user) => {
            return res.status(403).send({
                message: "Adresse-mail existe deja"
            })
        }) */
    
    let hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const user = new User({
      firstName: req.body.firstName,
      email: req.body.email,
      isAdmin: false,
      password: hashedPassword,
    });
  
    user
      .save()
      .then((data) => {
        let userToken = jwt.sign(
          {
            id: user._id,
          },
          configs.jwt.secret,
          {
            expiresIn: 86400,
          }
        );
        res.status(200).send({
          token: userToken,
          subscription: user.subscription,
          email: user.email,
          isAdmin: user.isAdmin,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occured",
        });
      });
};

exports.login = (req, res) => {
  //User.findOne (rechercher l'utilisateur par mail)
  const user = User.findOne({ email: req.body.email })
    .then((user) => {
      let passwordValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordValid) {
        return res.status(401).send({
          message: "password not valid",
          auth: false,
          token: null,
        });
      }
      let userToken = jwt.sign(
        {
          id: user._id,
        },
        configs.jwt.secret,
        {
          expiresIn: 86400,
        }
      );
      res.status(200).send({
        token: userToken,
        subscription: user.subscription,
        email: user.email,
        isAdmin: user.isadmin,
      });
    })
    .catch((err) => res.status(404).send({
      message: "Adresse-mail Incorrecte"
    }));
};

exports.getUser = (req, res) => {
  console.log(req.user);
  User.findById(req.user.id)
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => res.status(404).send(err));
};

exports.updateUser = (req, res) => {
  User.findById(req.user.id)
  if (data.email == req.user.email) {
    User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    })
      .then((data) => {
        res.send({ user: data });
      })
      .catch((err) => res.status(500).json({ err: err }));
  }
};

exports.verifyToken = (req, res) => {
  if (req.user) {
    res.status(200).json({ verify: true })
  }
}