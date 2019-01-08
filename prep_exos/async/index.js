/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/08 09:08:30 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/08 11:08:52 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

console.log('Before')
getUser(1, function(user){
  console.log('User', user)
  getRepositories(user.name, (repo) => {
    console.log(user.name + " repos are :" , repo)
  })
});
console.log('After')

function getUser(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading user from the Database..')
      resolve({ id: id, name: 'abil'})
    }, 2000);
  });
}

function getRepositories(username){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching user repo from Github...')
      resolve(['repo1', 'repo2', 'repo3'])
    }, 4000)
  });
}