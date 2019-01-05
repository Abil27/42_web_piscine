/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   nodeInfo.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/03 19:12:22 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/04 15:33:17 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

//Créez une page phpinfo.php qui exécute et affiche le résultat de nodeInfo(l'equivalent de phpinfo() ;

const http = require('http');
const nodeInfo = require('nodejs-info');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(nodeInfo(req))
})

server.listen(3000);
console.log("Server running and listening on port 3000")