/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   callback.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/01/01 16:13:20 by ahoussei          #+#    #+#             */
/*   Updated: 2019/01/01 16:35:42 by ahoussei         ###   ########.fr       */
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

function createPost(post, callback){
  setTimeout(() =>{
    posts.push(post);
    callback();
  }, 2000)
}


createPost({ title: 'Post Three', body: 'This is post Three'}, getPost);