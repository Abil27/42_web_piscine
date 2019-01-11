/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   create.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/10 10:33:31 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/10 12:26:25 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require("express");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const localStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

//user Schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

UserSchema.plugin(passportLocalMongoose);

User = mongoose.model("User", UserSchema);

//connect to database
mongoose.connect(
  "mongodb://localhost/exo1",
  { useNewUrlParser: true }
);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "I am gonna be a Software Engineer",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/houssein", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  req.body.username;
  req.body.password;
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.send(err);
      }
      passport.authenticate("local")(req, res, () => {
        res.send("OK");
      });
    }
  );
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}...`);
});
