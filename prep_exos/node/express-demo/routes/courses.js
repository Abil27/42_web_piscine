/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   courses.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/07 22:12:02 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/07 22:33:08 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express')
const router = express.Router()

const courses = [
  {id: 1, name: 'courses1'},
  {id: 2, name: 'courses2'},
  {id: 3, name: 'courses3'}
]


//get all courses
router.get('/', (req, res) => {
  res.send(courses)
})

// get a specific course
router.get('/:id', (req, res) => {
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
router.post('/', (req, res) => {

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
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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

module.exports = router;