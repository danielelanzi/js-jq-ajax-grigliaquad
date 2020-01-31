$(document).ready(function() {
  // ciclo for per creare una griglia da 36
  for (var i = 0; i < 36; i++) {
    var griglia = $("#prova > div").clone();
    $("#container").append(griglia);
  }
  $(document).on("click", "#container",function(event) {
    if ($(event.target).text() == "") {
      $.ajax({
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          success: function (data, stato) {
            $(event.target).text(data.response);
            if (data.response <= 5) {
              $(event.target).addClass("yellow");
            } else {
              $(event.target).addClass("green");
            }
          },
          error: function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      });
    }
  });
});
