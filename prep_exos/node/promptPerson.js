/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   promptPerson.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/02 15:15:44 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/02 15:18:26 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Hola, what is your name ?", function(answer){
  // do something
  console.log(answer)
})