/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   do_op.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/26 20:10:22 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/29 17:11:11 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Ce programme php prend 3 paramètres. Le second est une opération arithmétique
parmis les suivantes : ’+’, ’-’, ’*’, ’/’, ’%’. Les premiers et troisièmes sont des nombres. Il
s’agit de réaliser l’opération et d’afficher le résultat. Le programme ne doit pas effectuer de
gestion d’erreur, hormis le nombre de paramètres fournis. Espaces et tabulations peuvent
être présents dans les 3 paramètres*/

if(process.argv.length != 5){
  console.log("incorrect Parameters")
  process.exit()
}

  input = process.argv.slice(2).join('')
    return console.log(eval(input))