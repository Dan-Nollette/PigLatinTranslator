$(document).ready(function() {
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("p").show();
    if (result) {
      $("#result").text("");
    } else {
      $("#result").text("not ");
    }
  });
});

var leapYear = function(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    return true;
  } else {
    return false;
  }
};
