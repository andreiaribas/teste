function makeChange(n) {
  let result = [];

  const quarters = 25;
  const dimes = 10;
  const nickels = 5;
  const pennies = 1;

  let qCount = 0;
  let dCount = 0;
  let nCount = 0;
  let pCount = 0;

  while (n > 0) {
    if (n - quarters >= 0 && n >= quarters) {
      qCount++;
      n -= quarters;
    }
    if (n - dimes >= 0 && n >= dimes) {
      dCount++;
      n -= dimes;
    }
    if (n - nickels >= 0 && n >= nickels) {
      nCount++;
      n -= nickels;
    }
    if (n - pennies >= 0 && n >= pennies) {
      pCount++;
      n -= pennies;
    }
  }
  result.push([qCount, dCount, nCount, pCount]);

  var j = 1;
  for (j; pCount > 0; j++) {
    for (let i = 0; i < result.length; i++) {
      if (result[j - 1][i] > 0) {
        let saldo = 0;
        switch (i) {
          case 0: // campo da moeda de valor 25, alterando o de 10
            qCount -= 1;
            saldo = quarters;

            if (Math.floor(saldo / dimes) > 0) {
              dCount += 1;
              saldo -= dimes;
            }
            if (Math.floor(saldo / nickels) > 0) {
              nCount += 1;
              saldo -= nickels;
            }
            pCount += saldo / pennies;
            break;
          case 1: // campo da moeda de valor 10, alterando o de 5
            dCount -= 1;
            saldo = dimes;

            if (Math.floor(saldo / nickels) > 0) {
              nCount += 1;
              saldo -= nickels;
            }
            pCount += saldo / pennies;
            break;
          case 2: // campo da moeda de valor 5, alterando o de 1
            nCount -= 1;
            saldo = nickels;
            pCount += saldo / pennies;
            break;
        }
        result.push([qCount, dCount, nCount, pCount]);
      }
    }
  }

  console.log(result);
}
makeChange(12);
// [quarters, dimes, nickels, pennies].
