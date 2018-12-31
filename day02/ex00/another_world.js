/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   another_world.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/30 13:46:33 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/30 17:48:48 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if(process.argv.length < 3){
  process.exit()
} else {
  let regex = /\s+/g;
  let word  = process.argv[2];
  result = word.replace(regex, ' ');

  console.log(result)
}