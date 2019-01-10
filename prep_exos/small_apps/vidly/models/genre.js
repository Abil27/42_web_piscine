/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   genre.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/09 19:13:29 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/09 19:13:31 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const Joi = require("joi");
const mongoose = require("mongoose");

const Genre = mongoose.model(
  "Genre",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    }
  })
);

function validateGenre(genre) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateGenre;
