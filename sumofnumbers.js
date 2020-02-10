const testNum = [1, 2, 3, 4];

function sumFor(entry) {
  let a = 0;
  for (const num of entry) {
    a += num;
  }
  return a;
}

console.log(sumFor(testNum));

function sumWhile(entry) {
  let total = 0;
  let i = 0;
  while (i < entry.length) {
    total += entry[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testNum))

function sumRecursion(entry) {
  if (entry.length === 0) {
    return 0;
  }
  return entry[0] + sumRecursion(entry.slice(1, entry.length));
}
console.log(sumRecursion(testNum));

function sumTheSimpleWay(entry){
  return _.reduce(entry, function(n, m){return n + m}, 0)
}
console.log(sumTheSimpleWay(testNum));