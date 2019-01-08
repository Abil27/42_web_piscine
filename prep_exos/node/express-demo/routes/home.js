/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   home.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/07 22:21:09 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/07 22:23:36 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express')
const router = express.Router()

// homepage of our app
router.get('/', (req, res) => {
  res.render("index", {title: 'My express App', message: 'Hello World'})
});

module.exports = router;