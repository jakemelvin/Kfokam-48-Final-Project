let spn, h, min, s, ms, t, str, ps;

window.onload = function () {
  spn = document.getElementsByTagName("span");
  str = document.getElementById("start");
  ps = document.getElementById("pause");
  t;
  h = 0;
  min = 0;
  s = 0;
  ms = 0;
};
function chrono() {
  ms += 1;
  if (ms == 10) {
    ms = 1;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    min += 1;
  }
  if (min == 60) {
    min = 0;
    h += 1;
  }
  spn[0].innerHTML = h + "h";
  spn[1].innerHTML = min + "min";
  spn[2].innerHTML = s + "s";
  spn[3].innerHTML = ms + "ms";
}

function start() {
  t = setInterval(chrono, 100);
  str.disabled = true;
}
function stop() {
  clearInterval(t);
  str.disabled = false;
}
function reset() {
  clearInterval(t);
  str.disabled = false;
  ms = 0;
  s = 0;
  min = 0;
  h = 0;
  spn[0].innerHTML = h + "h";
  spn[1].innerHTML = min + "min";
  spn[2].innerHTML = s + "s";
  spn[3].innerHTML = ms + "ms";
}
