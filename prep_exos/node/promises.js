/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   promises.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/01 19:16:23 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/01 19:25:47 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const posts =[
  { title: 'Poste One', body: 'This is post one'},
  { title: 'Poste Two', body: 'This is post Two'}
]

function getPost(){
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) =>{
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000)
}

function createPost(post){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      posts.push(post);

      const error = false;

      if(!error){
        resolve()
      } else{
        reject('Oups! something went wrong');
      }
    }, 2000);

  });
}

createPost({ title: 'Post Three', body: 'This is post Three'}).then(getPost)
