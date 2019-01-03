/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   timers.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/02 14:13:21 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/02 14:53:27 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let waitTime = 3000;
let currentTime = 0;
let waitInterval = 100;
let percentWaited = 0;



function waitingPercent(p){
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`waiting ... ${p}%`)
}

let interval = setInterval(function(){
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/waitTime) * 100)
  waitingPercent(percentWaited)
}, waitInterval);

setTimeout(function(){
  clearInterval(interval)
  waitingPercent(100)
  console.log("\ndone ");
}, waitTime)

waitingPercent(percentWaited)