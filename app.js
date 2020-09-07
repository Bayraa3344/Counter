var num = 0;
function add() {
  num++;
  document.getElementById("count").innerHTML = num;
  document.getElementById("count").style.color = "green";
  if (num === 0) {
    document.getElementById("count").style.color = "#231f20";
  } else if (num < 0) {
    document.getElementById("count").style.color = "red";
  }
  console.log(num);
}

function minus() {
  num--;
  document.getElementById("count").innerHTML = num;
  if (num < 0) {
    document.getElementById("count").style.color = "red";
  } else if (num === 0) {
    document.getElementById("count").style.color = "#231f20";
  }
  console.log(num);
}
