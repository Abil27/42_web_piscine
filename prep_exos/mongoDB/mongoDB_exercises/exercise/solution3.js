/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   solution3.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/08 21:48:41 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/08 21:53:13 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Could not connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number
});

//create model for classes
const Course = mongoose.model("Course", courseSchema);

// Query courses
async function getCourse() {
  const courses = await Course.find({ isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
    .sort({ price: -1 })
    .select({ name: 1, author: 1, price: 1 });
  return courses;
}

async function run() {
  const displayCourses = await getCourse();
  console.log(displayCourses);
}

run();
