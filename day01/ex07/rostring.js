/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rostring.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/27 13:20:07 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/27 13:46:53 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function firstItem(){
  let array = process.argv.slice(2);
  item = array[0];
  console.log(item.split(" ").reverse().join(" "));
}

firstItem()
