const sentence = "hello there from lighthouse labs\n";
for (const char of sentence) {
  process.stdout.write(char);
}

setTimeout(() => {

  process.stdout.write(sentence);
  
}, 1000) // <= 1s delay to make it noticeable. Can dial it down later.