$(document).ready(function() {
  $("form#pig-latin-input").submit(function(event){
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var result = translate(phrase);
    $("#result").text(result);
  });
});

var translate = function(phrase) {
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  var isConsonant = false;
  consonants.forEach(function(consonant) {
    if (consonant === phrase) {
      isConsonant = true;
    }
  });
  if (isConsonant){
    return phrase + "ay";
  }
  if (phrase === "a" || phrase === "e" || phrase === "i" || phrase === "o" || phrase === "u") {
    return phrase + "way";
  } if (phrase )
  return phrase;
};
