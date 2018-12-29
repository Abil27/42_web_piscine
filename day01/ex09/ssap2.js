/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ssap2.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/27 21:15:51 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/28 20:23:33 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Reprenez votre ssap.php. Il s’agit ici de faire la même chose (prendre tous les mots de
tous les paramètres et de les trier), mais de changer les modalités du tri : celui-ci devra
être case insensitive, et mettre les caractères alphabétiques dans un premier temps, puis
les chiffres, enfin tous les autres caractères, chacun des 3 groupes suivant l’ordre ASCII.*/

let args = process.argv.slice(2)

res = args.join(" ").split(' ')

console.log(res)


res.sort(function (a, b){
  let x = a.toLowerCase();
  y = b.toLowerCase();
  if(x < y) { return -1; }
  if(y < x) { return 1; }
  return 0;
});

res.forEach((element) =>{
    console.log(element);
})