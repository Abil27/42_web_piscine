/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/08 13:47:50 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/09 16:37:20 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require("mongoose");
const Joi = require("joi");
const genres = require("./routes/genres");
const express = require("express");
const app = express();

// connect mongoose to our database
mongoose
  .connect("mongodb://locahost/vidly")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/genres", genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
