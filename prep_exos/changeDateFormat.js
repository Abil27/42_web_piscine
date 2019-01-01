/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   changeDateFormat.js                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/31 20:00:04 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/31 20:03:14 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Challenge: write a method that changes dates in the format 2016-06-17 to the format 17.06.2016. You must use a regular expression and should use methods described in this section8*/

function changeDateFormat(date){
  return date.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1');
}

console.log(changeDateFormat('2016-06-17'))
