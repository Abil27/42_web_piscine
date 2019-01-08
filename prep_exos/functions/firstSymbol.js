/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   firstSymbol.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/31 19:49:58 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/31 19:54:22 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Write a method that changes the first arithmetic operator (+, -, *, /) in a string to a '?' and returns the resulting string. Don't modify the original string*/

function firstSymbol(equation){
  return equation.replace(/[+\-*\/]/, '?');
}

console.log(firstSymbol('(4 * 3 + 2) / 7 - 1 = 1'))