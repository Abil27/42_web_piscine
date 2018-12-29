/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rostring.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/27 13:20:07 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/28 18:53:53 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Votre programme prend en paramètre une chaine de caractère, et met le premier mot
(séparateur espace) en dernière place. Le tout est ré-affiché, avec uniquement un seul
espace entre 2 mots.*/
// console.log(process.argv)
function firstItem(){
  if(process.argv[2] === undefined)
    process.exit(0)
  let array = process.argv[2].split(" ");
  if (array.length > 1){
    new_array = array.splice(1);
    result = new_array.concat(array[0]);
    console.log(result.join(' '))
  }else if(array.length == 1){
    console.log(process.argv[2])
  }
}

firstItem()