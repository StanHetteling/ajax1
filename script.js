let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let class1 = document.getElementById("class");
let submitButton = document.getElementById("submitButton");
let responseHere = document.getElementById("responseHere");

submitButton.addEventListener('click', ajax);

function ajax() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      responseHere.innerHTML = this.responseText;
    }
  };


  let httpString = "response.php?firstName=" + firstName.value + "&age=" + age.value + "&class=" + class1.value + "&lastName=" + lastName.value;

  console.log(httpString);

  xmlhttp.open("GET", httpString, true);
  xmlhttp.send();
}
