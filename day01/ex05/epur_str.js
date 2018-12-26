/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   epur_str.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/25 20:29:24 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/25 21:21:39 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* 
Ce programme prend un unique paramètre, et réduit à un seul espace entre chaque mot, et à aucun en début et fin de chaine. Il n’y a que des espaces, pas de tabulation ou autre*/

let args = process.argv.slice(2);

console.log(args.join(" ").trim());