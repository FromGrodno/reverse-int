module.exports = function reverse (n) {
   n = Math.abs(n)
   n = n + "";
   let r = Number(n.split("").reverse().join(""));
   return r
}
