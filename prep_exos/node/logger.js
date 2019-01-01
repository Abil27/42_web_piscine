/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   logger.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/31 23:30:54 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/31 23:48:26 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let url = 'http://houssein.io/log'

function log (message) {
  // send HTTP request
  console.log(message)
}

let person = {
  name: 'Houssein',
  surname: 'Abil'
}

module.exports = log;
module.exports.person = person;
