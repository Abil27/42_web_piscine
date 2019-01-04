/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   server.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/03 12:11:11 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/03 12:26:58 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

const server = http.createServer(function(req, res){
  res.writeHead(200, {"content-type": "text/html"})
  // res.end("Hello World");
  res.end(`
    <!DOCTYPE HTML>
    <html>
      <head>HTML Response</head>
      <body>
        <h1>Server Request</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
        <p>${res.statusCode}</p>
      </body>
    
    </html>
  `)
});

server.listen(3000);
console.log("Server running and listening on port 3000")

