/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   one_more_time.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/30 17:51:52 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/31 16:10:18 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Creer un programme qui detecte une date ( Jour-mois-annee-heure-minute-seconde) dans un texte et concerti cette date en secondes ecoule depuis 1970 */

// detecte la date
//jour (lundi) - nombre - mois - annee 

// detecter le jour
let day = /(lundi)|(mardi)|(mercredi)|(jeudi)|(vendredi)|(samedi)|(dimanche)/i;

// detecter le nombre du jour de la semaine
let numDay = /(0[1-9]|1[0-9]|2[0-9]|3[0-1])/
//detecter le mois 
let month = /(janvier)|(fevrier)|(mars)|(avril)|(mai)|(juin)|(juillet)|(aout)|(septembre)|(octobre)|(novembre)|(decembre)/i
// detecter lannee
let year = /(197[0-9]|20[0-9][0-9])/
// detecter lheure en heure min et seconde
let hour = /([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/


let validFormat = `${day} ${numDay} ${month} ${year} ${hour}`;

let expression = "Mardi 12 Novembre 2013 12:02:21";

let found = expression.match(day) 

console.log(found)

// convertrir le tout en seconde
