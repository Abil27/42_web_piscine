function grab(flag){
  let index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index+1]
}

let greeting = grab('--greeting');
let user = grab('--user');

if(!user || !greeting){
  console.log('Sorry no user or greetring found')
} else {
  console.log(`${greeting}, ${user}!`)
}

//indexOf return the position of a given value