/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   read.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/03 11:02:24 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/03 11:08:43 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

fs.readFile('./lib/sayings.md', 'UTF-8', function(err, contents){
  if(err){ throw err}
  console.log(contents)
});
console.log('Reading using file System...\n')
