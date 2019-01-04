/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   print_crisp.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/04 12:32:20 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/04 15:29:08 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// https://www.w3schools.com/js/js_cookies.asp
// https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
/*
//create cookie
document.cookie = "username=Houssein abil; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";

// read a cookie
let kookie = document.cookie;

//delete cookie (you can delete cookie just by change date to a passed date)
kookie = "username=Houssein abil; expires=Thu, 18 Dec 1970 12:00:00 UTC; path=/"
*/

//function to set cookie
function setCookie(cname, cvalue, exdays){
  let date = new Date();
  date.setTime(date.getTime() + (exdays*24*60*60*100));
  let expires = "expires="+ date.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// function to get cookie
function getCookie(cname){
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let carray = decodedCookie.split(";")

  for(let i = 0; i < carray.length; i++){
    let c = carray[i];
    while(c.charAt(0) == ' '){
      c = c.substring(1);
    }
    if(c.indexOf(name) == 0){
      return c.substring(name.length, c.length)
    }
  }
  return "";
}

//function to check cookie
function checkCookie(){
  let user = getCookie("username");

  if(user != ""){
    alert("Welcome again " + user)
  } else {
    user = prompt("Please enter your name:", "");
    if(user != "" && user != null){
      setCookie("username", user, 365);
    }
  }
}