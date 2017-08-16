$(document).ready(function() {
  $("form#pig-latin-input").submit(function(event){
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var result = translate(phrase);
    $("#result").text(result);
  });
});

var translate = function(phrase) {
  var characters = [];
  characters = phrase.split("");

  //var vowelPresent = false;
  // for (var i = 0; i < characters.length; i++){
  //
  //   if (!vowelPresent)
  // }

  if (isConsonant(characters[0])){
    var vowelFound = false;
    var leadingConsonants = 0;
    for (var i = 0; i < characters.length; i++) {
      if (!isConsonant(characters[i])) {
        vowelFound = true;
      } else if (!vowelFound) {
        leadingConsonants++;
      }
    }
    return phrase.substring(leadingConsonants) + phrase.substring(0, leadingConsonants) + "ay";
  }
  if (characters[0] === "a" || characters[0] === "e" || characters[0] === "i" || characters[0] === "o" || characters[0] === "u" || characters[0] === "y") {
    return phrase + "way";
  } if (phrase )
  return phrase;
};

var isConsonant = function(character){
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  var confirmedConsonant = false;
  consonants.forEach(function(consonant) {
    if (consonant === character) {
      confirmedConsonant =  true;
    }
  });
  return confirmedConsonant;
};
