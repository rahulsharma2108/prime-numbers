function isPrime(n) {
  if (n <= 1) return false;
  for (var i = 2; i <= n - 1; i++) if (n % i == 0) return false;
  return true;
}
const list = [];
function addData(data, n, batchsize) {
  list.push(...data);
  console.log(data, data.length);
  if (list.length < n) {
    return printPrimeNumbersinBatch(n, batchsize, list[list.length - 1] + 1);
  }
  console.log('totallist', list, list.length);
}

function printPrimeNumbersinBatch(n, batchsize = 10, startIndex = 1) {
  const data = [];
  var counter = startIndex;
  setTimeout(() => {
    while (data.length < batchsize) {
      if (isPrime(counter)) {
        data.push(counter);
      }
      counter++;
    }
    addData(data, n, batchsize);
  });
}

printPrimeNumbersinBatch(100, 10);
