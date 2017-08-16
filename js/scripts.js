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

  if (isVowel(characters[0])) {
    return phrase + "way";
  } if (phrase )
  return phrase;
};

var isConsonant = function(character){
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  var confirmedConsonant = false;
  consonants.forEach(function(consonant) {
    if (consonant === character.toLowerCase()) {
      confirmedConsonant =  true;
    }
  });
  return confirmedConsonant;
};

var isVowel = function(character) {
  var lowerCharacter = character.toLowerCase();
  if (lowerCharacter === "a" || lowerCharacter === "e" || lowerCharacter === "i" || lowerCharacter === "o" || lowerCharacter === "u" || lowerCharacter === "y") {
    return true;
  }  else {
    return false;
  }

}
