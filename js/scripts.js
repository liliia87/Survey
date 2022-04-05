$(document).ready(function() {
    $("form#choisefood").click(function(event) {
      event.preventDefault();
      const number1 = $("#food").val();
      $("#output").text(number1);
    });
  });