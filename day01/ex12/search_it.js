/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   search_it.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/29 14:02:05 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/29 18:21:59 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Votre but est de réaliser un programme qui affiche la valeur correspondante à une clef
donnée comme premier paramètre, parmis les couples “clef :valeur” présents en nombre
indéterminé passés en paramètres suivants */

args = process.argv.slice(2).join(" ");
console.log(args);
