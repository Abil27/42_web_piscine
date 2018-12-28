/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ssap2.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/27 21:15:51 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/27 21:51:58 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let args = process.argv.slice(2);
// input = [ 'Building', 'car', 'bicycle', 'automobile', 'Tree', 'house' ];
input = args;

input.sort(function (a, b){
  let x = a.toLowerCase();
      y = b.toLowerCase();
  if(x < y) { return -1; }
  if(y < x) { return 1; }
  return 0;
});

// console.log(input)

input.forEach((element) => {
   console.log(element);
 });