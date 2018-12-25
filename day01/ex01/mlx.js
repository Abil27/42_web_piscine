
function print(){
  i = 0;
  while (i < 1000){
    if(i === 100) break
    process.stdout.write("X");
    i++;
  }
}

print()
