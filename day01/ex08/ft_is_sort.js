/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_is_sort.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/12/27 14:22:16 by ahoussei          #+#    #+#             */
/*   Updated: 2018/12/27 19:47:42 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

arr = ['g', 'a', 'b', 'c', 'd', 'e'];
arr2 = ["!/@#;^", "42", "Hello World", "salut", "zZzZzZz"];
arr3 = ["Et qu’est-ce qu’on fait maintenant ?"];

function ft_is_sort(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] < array[i + 1]){
      // return true;
      console.log("Array is sorted"); break;
    } else {
      // return false;
      console.log("array is not sorted"); break;
    }
  }
}

ft_is_sort(arr);
ft_is_sort(arr2);
ft_is_sort(arr3);