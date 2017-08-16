$(document).ready(function() {
  $("form#pig-latin-input").submit(function(event){
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var result = translateMultiple(phrase);
    $("#result").text(result);
  });
});

var translateMultiple = function(phrase) {
  var words = [];
  words = phrase.split(" ");
  var processedWords = words.map(function(word){
    return translate(word);
  });
  return processedWords.join(" ");
}

var translate = function(phrase) {
  var characters = [];
  characters = phrase.split("");

  if (isConsonant(characters[0]) || characters[0].toLowerCase() === 'y'){
    var vowelFound = false;
    var leadingConsonants = 1;

    for (var i = 1; i < characters.length; i++) {
      if (!isConsonant(characters[i])) {
        if(!vowelFound && characters[i].toLowerCase() === 'u' && characters[i - 1].toLowerCase() === 'q') {
          leadingConsonants++;
        }
        vowelFound = true;
      } else if (!vowelFound) {
        leadingConsonants++;
      }
    }

    return phrase.substring(leadingConsonants) + phrase.substring(0, leadingConsonants) + "ay";
  }

  if (isVowel(characters[0])) {
    return phrase + "way";
  } else if (phrase) {
    return phrase;
  }
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
};
