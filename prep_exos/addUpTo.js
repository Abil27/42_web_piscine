/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   addUpTo.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/29 07:50:31 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/29 07:55:55 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Write a function that calculate the sum of all the numbers from 1 up to (and including some number)*/

// first method using Math
function addUpTo(n){
  let sum = 0;
  for(let i = 0; i <= n; i++){
    sum += i;
  }
  return sum
}

console.log(addUpTo(9));

// second method

function addUpTo(n){
  return n * (n + 1) / 2;
}

console.log(addUpTo(9))