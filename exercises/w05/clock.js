// running status of the clock
var running = false;
var timer = undefined;

function displayTime() {
  // Current date/time
  var d = new Date();  
  // New Year event (can you make it more flexible instead of 2023?)
  var event = new Date(2023, 0, 1, 0, 0, 0);
  var distance = Math.floor((event - d) / 1000);  // difference in seconds
  var days = Math.floor(distance / (24 * 3600));
  distance -= (days * 24 * 3600);
  var hours = Math.floor(distance / 3600);
  distance -= (hours * 3600);
  var minutes = Math.floor(distance / 60);
  var seconds = distance - minutes * 60;
  document.querySelector("#time").innerHTML = d.getHours() + ':' + 
    d.getMinutes() + ':' + d.getSeconds() +
    " - Count down to New Year: " + days + " days, " + hours + " hours, " +
    minutes + " minutes, " + seconds + " seconds";
}

function startStop() {
  if (running) {
    clearInterval(timer);
    document.querySelector("#timer_btn").value = "Start";
  } else {
    timer = setInterval(displayTime, 1000);
    document.querySelector("#timer_btn").value = "Stop";
  }
  running = !running;
}