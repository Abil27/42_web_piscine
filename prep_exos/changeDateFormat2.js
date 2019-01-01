/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   changeDateFormat2.js                               :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/31 20:04:17 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/31 20:09:29 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function changeDateFormat2(date){
  let dateRegex = /^(\d\d\d\d)([\-\/])(\d\d)\2(\d\d)$/;
  return date.replace(dateRegex, '$4.$3.$1');
}

console.log(changeDateFormat2('2016-06-17'))
console.log(changeDateFormat2('2017/05/03'))