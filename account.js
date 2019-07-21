$.getJSON("https://fbay-server.herokuapp.com/users/get?username=" + getCookie("username").split("=")[1], function(data){
  let data2 = JSON.parse(data.message);
  document.getElementById("name").innerText = data2.username;
  document.getElementById("email").innerText = data2.email;
});

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.value);
    }
  }
  return "";
}

