/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   oddeven.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/25 18:54:29 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/25 21:23:38 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Faites donc un programme en php qui vous demande gentiment un numéro de pile de linge, et qui vous répond s’il est pair (donc lavé avec Olympe) ou s’il est impair.*/
// const rlSync = require("readline-sync");
// while(1){
//   let userInput = rlSync.question("Entrez un nombre: ");
  
//   function oddeven(input){
//     if(userInput % 2 === 0){
//       console.log(`The number ${userInput} is Even`)
//     } else if(userInput % 2 === 1) {
//       console.log(`The number ${userInput} is Odd`)
//     } else {
//       console.log(`'${userInput}' is not a number`)
//     }
//   }
  
//   oddeven(userInput);
// }
let userInput;


function question(){
  process.stdout.write("Entrez un nombre: ");
}

process.stdin.on('data', (data) =>{
  userInput = data.toString().trim();
    if(userInput % 2 === 0){
      process.stdout.write(`The number ${userInput} is Even \n`)
    } else if(userInput % 2 === 1){
      process.stdout.write(`The number ${userInput} is Odd \n`)
    } else {
      process.stdout.write(`'${userInput}' is not a number \n`)
    }
    question();
});

question();