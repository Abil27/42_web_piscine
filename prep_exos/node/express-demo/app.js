/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/07 11:31:07 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/07 22:26:21 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// loading needed modules
const startupDdebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const config = require('config')
const logger = require('./middleware/logger')
const courses = require('./routes/courses')
const home = require('./routes/home')
const morgan = require('morgan')
const helmet = require('helmet')
const Joi = require('joi')
const express = require('express')
const app = express();

//template engine
app.set('view engine', 'pug');


//in order to use json in postman
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // return the req body
app.use(express.static('public')) // to serve static files
app.use(helmet())
app.use('/api/courses', courses)
app.use('/', home)
//middleware function
app.use(logger)


//configuration
console.log(`Application name: ${config.get('name')}`)
console.log(`Mail server: ${config.get('mail.host')}`)

if(app.get('env') === 'development'){
  app.use(morgan('tiny'))
  startupDdebugger('Morgan enabled....')
}

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`express is running and listening on port ${port}`))