/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/31 23:02:02 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/03 14:51:55 by ahoussei         ###   ########.fr       */
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

server.listen(8001);
console.log("Server running and listening on port 3000")