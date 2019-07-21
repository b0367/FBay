  var xhttp = new XMLHttpRequest();

xhttp.onload = function(){
    console.log(xhttp.status);
    if(xhttp.status != 200){
      alert('This username is already taken!');
    }
  }

function Register(){
  console.log("ye");
  xhttp.open("GET", "https://fbay-server.herokuapp.com/users/create/?username=" + document.getElementById('username').value + "&password=" + document.getElementById('password').value + "&email=" + document.getElementById('email').value);
  xhttp.send();
  document.getElementById('username').value = "";
  document.getElementById('email').value = "";
  document.getElementById('password').value = "";
}