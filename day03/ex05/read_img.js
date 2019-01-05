/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   read_img.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/04 16:47:16 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/04 17:55:36 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Créez une page read_img.js qui renvoie au navigateur le fichier 42.png avec le bon
Content-Type. Vous trouverez ce fichier dans le sujet sur l’intranet. Vous devez le mettre
dans votre dépôt dans “/img/42.png” pour que nous puissions le réutiliser dans plusieurs
exercices.*/

const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(req, res){
  if(req.url === "/"){
    fs.readFile("./index.html", "UTF-8", function(err, html){
      res.writeHead(200, { "Content-Type": "text/html"});
      res.end(html)
    })
  }
  else if(req.url.match(/.png$/)){
    let imgPath = path.join(__dirname, req.url);
    let imgStream = fs.createReadStream(imgPath);

    res.writeHead(200, { "Content-Type": "image/png" })
    imgStream.pipe(res)
  } else {
    res.writeHead(404, { "Content-Type": "text/plain"} )
    res.end("404 file not found")
  }


}).listen(5000)
console.log("server is running and listening on port 5000")