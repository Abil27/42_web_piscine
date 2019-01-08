/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/07 11:31:07 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/07 19:32:31 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// loading needed modules
const logger = require('./logger')
const Joi = require('joi')
const express = require('express')
const app = express();

//in order to use json in postman
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // return the req body
app.use(express.static('public')) // to serve static files

//middleware function
app.use(logger)

const courses = [
  {id: 1, name: 'courses1'},
  {id: 2, name: 'courses2'},
  {id: 3, name: 'courses3'}
]

app.get('/', (req, res) => {
  res.send("Hello Word")
});

//get all courses
app.get('/api/courses', (req, res) => {
  res.send(courses)
})

// get a specific course
app.get('/api/courses/:id', (req, res) => {
  //find the course in the courses array
  const course = courses.find(function(c){ 
    return c.id === parseInt(req.params.id)
  });
  // send a 404 if course not found
  if(!course) {
    return res.status(404).send('The course with the given Id is not found')
  } else {res.send(course)}
});

//add new course
app.post('/api/courses', (req, res) => {

  //joi schema for data validation
  const { error } = validateCourse(req.body)
  if(error) {
    return res.status(400).send(error.details[0].message)
  }
  //store course
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course)
  res.send(course)
})

//update a course
app.put('/api/courses/:id', (req, res) => {
  //Check if the course exist
  const course = courses.find(function(c){
    return c.id === parseInt(req.params.id)
  })
  //If not return a 404 and // send a 404 if course not found
  if(!course){ 
    return res.status(404).send("The course the given Id doesn't exist")
  }
  

  //if exist then check if the course is valid
  const { error } = validateCourse(req.body)
  if(error){
    return res.status(400).send(error.details[0].message)
  }

  //update the course
  course.name = req.body.name;
  //return the course
  res.send(course)
})

//delete a course
app.delete('/api/courses/:id', (req, res) => {
  //Check if the course exist
  const course = courses.find(function(c){
    return c.id === parseInt(req.params.id)
  })
  //If not return a 404 and // send a 404 if course not found
  if(!course){ 
    return res.status(404).send("The course the given Id doesn't exist")
  }

  //to delete a course, we need to find the index of the course
  const index = courses.indexOf(course)
  courses.splice(index, 1)
  // return the course to client
  res.send(course)

})

//function to validate the course
function validateCourse(course){
  const schema = {
    name: Joi.string().min(3).required()
  }

  return Joi.validate(course, schema)
}



const port = process.env.PORT || 3000
app.listen(port, () => console.log(`express is running and listening on port ${port}`))