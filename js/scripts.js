$(document).ready(function() {
  $("form#pig-latin-input").submit(function(event){
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var result = translate(phrase);
    $("#result").text(result);
  });
});

var translate = function(phrase) {
  if (phrase === "a" || phrase === "e" || phrase === "i" || phrase === "o" || phrase === "u") {
    return phrase + "way";
  }
  return phrase;
};
