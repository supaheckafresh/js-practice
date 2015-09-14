function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++)
    if (str.charAt(i) === char)
      count += 1;
  return count;
}

function countBs(str) {
  return countChar(str, "B");
}


console.log(countBs("BandBjlkajsdfB"));
console.log(countBs("bandBjlkajsdfBBBBaaaaaaaaaaadlkjbsdfB"));
console.log(countBs("adafs"));
console.log(countBs(""));
console.log(countBs(27));

console.log(countChar("ArkjalskjdfAAAkjalsdkjfA", "A"));
