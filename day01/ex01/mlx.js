/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   mlx.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/25 18:57:23 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/25 21:24:05 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*réaliser, c’est un programme php qui affiche 1000 fois la lettre X, un retour à la ligne, et avec comme contrainte qu’il ne doit pas dépasser les 100 chars.*/
function print(){
  i = 0;
  while (i < 1000){
    if(i === 100) break
    process.stdout.write("X");
    i++;
  }
}

print()
