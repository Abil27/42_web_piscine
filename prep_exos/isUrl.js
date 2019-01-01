/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   isUrl.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/31 19:40:49 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/31 19:47:54 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Write a method that returns true if its argument looks like a URL, false if it does not */

function isUrl(text){
  return console.log(text.match(/^https?:\/\/\S+$/))
}

isUrl('http://milameet.com')