/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   reverse_string.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/29 07:02:12 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/29 07:54:37 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Write a function that takes a string and return a reverse copy of that string */

// using for loop
function reverse(str){
  // create an string that will take the reverse copy
  let reversed = ""
  // loop through the actual string and increment the reverse char 
  for(let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  // return the the reversed string
  return reversed;
}

console.log(reverse("Houssein"))

// Using for of (new ES6)

function reverse(str){
  let reversed = "";
  for(let char of str){
    reversed = char + reversed;
  }
}

// using reverse built in function
// reverse only works for arrays so we will need to convert first our string to array then convert back to string

function reverse(str){
  return str.split("").reverse().join("");
}

// Using ES6 we can refactor by using the spread operator instead of split
function reverse(str){
  return [...str].reverse().join("");
}

// using recursion
