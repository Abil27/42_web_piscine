/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   one_more_time.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/30 17:51:52 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/01 10:57:05 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Creer un programme qui detecte une date ( Jour-mois-annee-heure-minute-seconde) dans un texte et concerti cette date en secondes ecoule depuis 1970 */

if(process.argv.length !== 3){
  return
}
// detecte la date
//jour (lundi) - nombre - mois - annee 
let argvDate = process.argv[2].split(' ')
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

function matchDate(arr){
  if(day.test(argvDate[0]) && numDay.test(argvDate[1]) && month.test(argvDate[2]) && year.test(argvDate[3]) && hour.test(argvDate[4])){
    getDate = new Date(argvDate).getTime()
    //console.log(getDate)
    seconds = getDate / 1000
    console.log(seconds)
  } else { console.log("Wrong format")}
}
matchDate(argvDate)

// convertrir le tout en seconde