/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/03 15:20:01 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/03 16:35:49 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

let foodTerms = [
  {
    term: "Chinkafa",
    defined: "Tout ce qu'on peut cook avec du riz"
  },
  {
    term: "Wacthe",
    defined: "Repas favoris des Kotokoli mais quand tu manges tu vas dormir jusqu'aaaa"
  },
  {
    term: "Kom",
    defined: "fait a base de maïs, une specialite des Gaida"
  }
];

//parse all the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//log all the request details
app.use(function(req, res, next){
  console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
  next(); // our app wont work without this
})
app.use(express.static("./public"));
app.use(cors());

//all routes of the app
app.get("/dictionary-api", function(req, res){
  res.json(foodTerms)
})

app.post("/dictionary-api", function(req, res){
  foodTerms.push(req.body);
  res.json(foodTerms);
})

app.delete("/dictionary-api/:term", function(req, res){
  foodTerms = foodTerms.filter(function(definition){
    return definition.term.toLowerCase() !== req.params.term.toLowerCase();
  });
  res.json(foodTerms)
});


app.listen(3000);

console.log("Express app is running on port 3000")

module.exports = app;