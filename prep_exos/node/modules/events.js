/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   events.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/06 21:53:28 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/06 21:56:41 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const EventEmitter = require("events");

const emitter = new EventEmitter();

//Register an event
emitter.on("MessageLogged", function() {
  console.log("Event Raised");
});

// Raise an event
emitter.emit("MessageLogged");
