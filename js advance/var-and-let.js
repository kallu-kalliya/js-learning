// difference between var and let 


// var is function-scoped, not block-scoped
// let is block-scoped

for (var i = 1; i <= 3; i++) {
  (function(i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}