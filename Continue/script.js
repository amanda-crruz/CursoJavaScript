//o continue é usado para pular o resto da execução do loop

for(let i = 10; i > 0; i = i - 1) {

  if(i % 2 == 0) {
      console.log("caiu no continue");
      continue;
  }

  console.log(i);
}