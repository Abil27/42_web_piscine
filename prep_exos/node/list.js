/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   list.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/03 10:54:54 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/03 11:00:34 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

fs.readdir('./lib', function(err, files){
  if(err){
    throw err;
  }
  console.log(files)
});
console.log("Reading files...")