/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   raw_text.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/04 16:12:19 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/04 16:21:01 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

//Créez une page raw_text.php qui affiche la même chose à l’écran que l’on regarde son code source avec curl ou son rendu html dans Chrome

const http = require("http");

const server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "Text/plain"});
  res.end(`
  <!DOCTYPE HTML>
    <html>
      <head>HTML Plain Response</head>
      <body>
        Hello World
      </body>
    
    </html>
  `)
}).listen(3000)

console.log("Server has started and listening on port 3000")