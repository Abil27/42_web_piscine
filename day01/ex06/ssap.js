/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ssap.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/25 20:53:43 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/25 21:19:57 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* L’ensemble des mots contenus dans tous les paramètres (sauf nom du programme lui-même) sont triés et affichés*/

let args = process.argv.slice(2)

array = args.sort();

array.forEach((element) => {
  console.log(element);
})

