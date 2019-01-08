/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/08 13:58:55 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/08 14:51:06 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Could not connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

//create a model for classes
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  //create an object of Course
  const course = new Course({
    name: "React course",
    author: "Houssein",
    tags: ["react", "frontend", "javascript"],
    isPublished: true
  });

  // Save it to our Database
  const result = await course.save();
  console.log(result);
}

async function getCourse() {
  const course = await Course.find({ author: "Houssein", isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(course);
}

getCourse();
