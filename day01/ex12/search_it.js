/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   search_it.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/29 14:02:05 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/30 11:19:36 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Votre but est de réaliser un programme qui affiche la valeur correspondante à une clef
donnée comme premier paramètre, parmis les couples “clef :valeur” présents en nombre
indéterminé passés en paramètres suivants */

function search_it() {
  let argv = process.argv.slice(3);
  let key = process.argv
    .slice(2)[0]
    .split(" ")
    .join("");
  // console.log(typeof key);

  let obj = {};
  for (let i = 0; i < argv.length; i++) {
    let split = argv[i].split(":");
    obj[split[0].trim()] = split[1].trim();
  }

  console.log(obj);
}

search_it();
