/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   print_get.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/03 20:27:58 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/03 21:07:41 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// http://usefulangle.com/post/78/javascript-get-url-parameters

 let url = new URL('http://42.com?id=100&topic=main&name=houssein');
// let url = new URL(process.argv[2]);

let search_params = new URLSearchParams(url.search); 

// iterate over the query parameters
for(let i of search_params) {
  // i an an array
  // i[0] => name 
  // i[1] => value
  console.log(`${i[0]} : ${i[1]}`);
}