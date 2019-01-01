/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   firstFruit.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/31 19:55:26 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/31 19:59:19 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Write a method that changes the first occurrence of the word apple, blueberry, or cherry in a string to danish*/

function firstFruit(str){
  return str.replace(/\b(apple|blueberry|cherry)\b/i, 'danish')
}

console.log(firstFruit('My favorite is blueberry pie'))