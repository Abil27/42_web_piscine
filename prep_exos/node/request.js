/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   request.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/03 11:56:32 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/03 12:09:31 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var https = require("https");
var fs = require("fs");

var options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/George_Washington",
  method: "GET"
};

var req = https.request(options, function(res) {

  var responseBody = "";

  console.log("Response from server started.");
  console.log(`Server Status: ${res.statusCode} `);
  console.log("Response Headers: %j", res.headers);

  res.setEncoding("UTF-8");

  res.once("data", function(chunk) {
    console.log(chunk);
  });

  res.on("data", function(chunk) {
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  });

  res.on("end", function() {
    fs.writeFile("george-washington.html", responseBody, function(err) {
      if (err) {
        throw err;
      }
      console.log("File Downloaded");
    });
  });

});

req.on("error", function(err) {
  console.log(`problem with request: ${err.message}`);
});

req.end();

