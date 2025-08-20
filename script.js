let display = document.getElementById("display");

window.press = function(v) { display.value += v; }
window.clearScreen = function() { display.value = ""; }
window.deleteChar = function() { display.value = display.value.slice(0, -1); }
window.calculate = function() {
  try { display.value = eval(display.value); }
  catch { display.value = "Error"; }
}