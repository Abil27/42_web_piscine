/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_is_sort.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/27 14:22:16 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/28 20:23:01 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Il s’agit pour vous de réaliser une petite fonction qui renvoie vrai ou faux selon que
le tableau passé en paramètres est trié ou non */


arr = ['a', 'b', 'c', 'd'];
arr1 = ["123", "a123", "123a"];
arr2 = ["!/@#;^", "42", "Hello World", "salut", "zZzZzZz"];
arr3 = ["Et qu’est-ce qu’on fait maintenant ?"];
arr4 = [3, 5, 9];
arr5 = [7, 4, 8, 11]

function isSort(arr){
  for(i = 0; i < arr.length - 1; i++){
    if(arr[i] > arr[i + 1]){
      return false;
    }
  }
  return true;
}

function ifSort(tab){
  if(isSort(tab)){
    console.log("Is Sort")
  } else { console.log("Is not sort")}
}

ifSort(arr)
ifSort(arr1)
ifSort(arr2)
ifSort(arr3)
ifSort(arr4)
ifSort(arr5)