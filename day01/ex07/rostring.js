/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rostring.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/27 13:20:07 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/27 14:11:52 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function firstItem(){
  let item = process.argv[2];
  console.log(item.split(" ").reverse().join(" "));
}

firstItem()
