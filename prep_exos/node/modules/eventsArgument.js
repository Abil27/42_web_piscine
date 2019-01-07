/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   eventsArgument.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/06 22:01:25 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/06 22:02:17 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const EventEmitter = require("events");

const emitter = new EventEmitter();

//Register an event
emitter.on("MessageLogged", e => {
  console.log("Event Raised", e);
});

// Raise an event
emitter.emit("MessageLogged", { id: 1, url: "http://" });
