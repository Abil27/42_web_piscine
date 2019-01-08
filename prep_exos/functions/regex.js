/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   regex.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/26 21:04:53 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/26 21:11:05 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let pattern = /[0-9]{10}/;

let word = " My phone number is 5103998466";

let result = pattern.test(word)

console.log(result)

// Match all occurence
 let pattern2 = /[0-9]{10}/g;
 let word2 = "My phone numbers are 5103998466 and 51012349876";
 let result2 = word2.match(pattern2);

 console.log(result2)