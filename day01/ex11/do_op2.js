/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   do_op2.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/28 20:25:00 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/28 21:07:27 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Cette fois-ci, un seul paramètre au menu. Celui-ci contient l’integralité du calcul à
effectuer. Ce calcul sera toujours de la forme nombre opérateur nombre. Un nouveau
message d’erreur “Syntax Error” vient compléter le précédent dans le cas où la syntaxe
ne serait pas correcte. Il peut ne pas y avoir d’espace entre les chiffres et l’opérateur, ou
bien plusieurs. Le résultat attendu reste le même */


if(process.argv.length != 3)
    return process.stdout.write("Incorrect parameters")

input = process.argv.slice(2).join('')
  return console.log(eval(input))
  
  if(input.length > 2) 
     process.stdout.write("Syntax error")