/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   logger.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/07 19:22:00 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/07 19:23:03 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function log(req, res, next){
  console.log('Logging....');
  next();
}

module.exports = log;