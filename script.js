const colors = document.getElementsByClassName("colors");

let i;
for (i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", changeColor);
}

function changeColor(e) {
  e.preventDefault();
  let color = this.getAttribute("data-color");
  localStorage.setItem(color, color);
  document.body.style.backgroundColor = color;
}

var btn = document.getElementById('srchBtn');
btn.addEventListener('click', () => {
  loadDoc();
});

function loadDoc() {
  var name = document.getElementById("searchMovie").value;
  document.getElementById("showMovies").innerHTML = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      for (var i = 0; i < response.length; i++) {
        let r = response[i].show.image.medium;
        document.getElementById("showMovies").innerHTML =
          document.getElementById("showMovies").innerHTML + `<img src ='${r}' />`;
      }
    }
  };
  xhttp.open("GET", `https://api.tvmaze.com/search/shows?q=${name}`, true);
  xhttp.send();
}