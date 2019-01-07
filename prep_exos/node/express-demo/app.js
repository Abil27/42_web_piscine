/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/07 11:31:07 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/07 11:46:39 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send("Hello Word")
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3, 4])
})

app.get('/api/courses/:id')


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`express is running and listening on port ${port}`))