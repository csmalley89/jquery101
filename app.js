console.log('jquery 101')

$(document).ready(function () {
  console.log('I am ready')
});

$(document).ready(function() {
  // All the JavaScript that depends on jQuery will be written here

  // Select the article DOM element by its id attribute
  var article = $("#top-article");
  console.log("article", article);
});

$('h1').click(function () {
  console.log("CLicked h1")
})
