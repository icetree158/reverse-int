module.exports = function reverse (n) {
  let String = "";

    for (var i = n.length - 1; i >= 0; i--) {
        String += n[i]; 
    }

    return String;
}
