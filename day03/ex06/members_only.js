/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   members_only.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/05 12:54:21 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/05 14:50:48 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Créez une page members_only.php qui réclame un login/pass au niveau du protocol
http.
Si le login est “zaz” et le pass “jaimelespetitsponeys” la réponse doit être une page html
contenant un tag img dont la source est directement les datas de l’image “/img/42.png”
et non son url. (attention nous allons sûrement changer le contenu de 42.png pour la
correction, donc pas de valeur de contenu en dur)*/

const http = require("http");
const fs = require("fs");
const path = require("path")

http.createServer(function(req, res){
  let url = new URl('http://42.us?user=zaz&password=jaimelespetitsponeys')
  let search = new URLSearchParams(url.search)

  for(let i of search){
    if(i[0] === 'zaz' && i[1] === 'jaimelespetitsponeys'){
      let imgPath = path.join(__dirname, req.url);
      let imgStream = fs.createReadStream(imgPath);

      res.writeHead(200, { "Content-Type": "image/png" })
      imgStream.pipe(res)
    } else {
      res.writeHead(401, { "Content-Type": "text/plain"} )
      res.end(`
      <html><body>Cette zone est accessible uniquement aux membres du site</body></html>
      `)
    }
  }
}).listen(3000)
console.log("server is running and listening on port 3000")