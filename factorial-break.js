//factorial-break
i = 1;
fact = 1;
while (true) {
  fact = fact * i;
  i++;
  if (i > 10) {
    break;
  }
}
console.log(fact);
