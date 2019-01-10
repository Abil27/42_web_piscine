<!--
# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    node.md                                            :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2018/12/31 23:19:40 by ahoussei          #+#    #+#              #
#    Updated: 2018/12/31 23:19:45 by ahoussei         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #
-->

- Every file in a node applications is considered a module. The variables and functions defined in that module are scoped in that file

- Tools like JSHint scan your code for error at compile time
- In a module we can export a single function or an object. In NodeJs every JavaScript file is a module.

- npm ls : to list all the installed packages

- We can set an environment variable on man usin _export PORT=number_ eg _export PORT=5000_

- Some useful package

- Query string parameters are parameters we add in a url after a question mark. **req.query** helps you to read parameters from url

- "mongoose" :"^4.14.7" // Major-Minor-Patch ==> 4.x
- "mongoose" :"~4.14.7" // Major-Minor-Patch ==> 4.14.x

- We can set the development env by using **export NODE_ENV=production**

* Some useful package
  ** node-dev
  ** js-hint
  ** httpster
  ** express
  ** cors
  ** body-parser
  ** underscore
  ** nodemon
  ** client-sessions
  ** bcryptjs
  ** csurf
  ** helmet
  ** joi // for input validation
  ** morgan
  ** config
  ** debug
  ** pug
  ** mongoose
  ** passport
  ** passport-local
  ** express-session
  ** ejs
  \*\* passport-local-mongoose
