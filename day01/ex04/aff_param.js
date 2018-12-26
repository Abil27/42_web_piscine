/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   aff_param.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/25 19:11:31 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/25 21:22:19 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Très classique, ce programme affiche ses différents paramètres de la ligne de com- mande, dans l’ordre reçu. Le nom du programme ne s’affiche pas.*/
// console.log(process.argv[2])

let args = process.argv.slice(2);

for(let arg of args){
  console.log(arg)
}