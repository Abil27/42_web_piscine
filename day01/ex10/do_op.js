/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   do_op.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/26 20:10:22 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/28 20:21:11 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if(process.argv.length != 5)
  console.log("incorrect Parameters")

input = process.argv.slice(2).join('')
console.log(eval(input))