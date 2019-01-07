/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   os.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/06 21:32:26 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/06 21:35:01 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const os = require("os");

let freeMemory = os.freemem();
let totalMemory = os.totalmem();

console.log("The free memory is " + freeMemory);
console.log("The total memory is " + totalMemory);
