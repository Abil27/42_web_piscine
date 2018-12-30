/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   upAndDown.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/29 10:00:38 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/29 10:04:09 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function upAndDown(n){
  console.log("Going up");
  for(let i = 0; i < n; i++){
    console.log(i);
  }

  console.log("Going down now");
  for(let j = n - 1; j >= 0; j--){
    console.log(j);
  }
  console.log("Im done GoodBye");
}

upAndDown(27);