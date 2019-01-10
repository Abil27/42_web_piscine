/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/09 21:33:39 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/09 21:47:14 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/auth")

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/secret', (req, res) => {
  res.render('secret')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}....`)
})