window.onload = function () {
  var d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var hours = ["Closed", "8:00am - 5:00pm", "8:00am - 1:00pm", "8:00am - 5:00pm", "Closed", "	8:00am - 5:00pm", "Closed"]

  var message = days[d.getDay()] + ": Open " + hours[d.getDay()];

  document.getElementById("intro").innerHTML = message;

}
