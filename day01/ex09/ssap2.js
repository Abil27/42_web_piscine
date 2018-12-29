/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ssap2.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/27 21:15:51 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/28 20:05:07 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let args = process.argv.slice(2)

res = args.join(" ").split(' ')

console.log(res)


res.sort(function (a, b){
  let x = a.toLowerCase();
  y = b.toLowerCase();
  if(x < y) { return -1; }
  if(y < x) { return 1; }
  return 0;
});

res.forEach((element) =>{
    console.log(element);
})