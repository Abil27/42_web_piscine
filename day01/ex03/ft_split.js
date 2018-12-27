/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_split.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/25 18:59:41 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/26 15:00:51 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Réalisez la fonction ft_split. Elle prend une chaine de caractères en paramètre, et renvoie un tableau trié des différents mots, initialement séparés par un ou des espaces dans la chaine originale. Votre rendu ft_split.js sera inclus dans un fichier js de test*/


let input = "   Hello    Houssein         Abil tarik Bonjour 2019  "

// function ft_split(str){
//   return str.replace(/\s+/g, ' ').trim().split(' ').sort();
// }

function ft_split(str){
  return str.match(/[\w]+/g).sort();
}
array = ft_split(input);

console.log("Array");
console.log("(");

array.forEach(function (value, key){
  console.log(`     [${key}] => ${value}`);
})

console.log(")");
