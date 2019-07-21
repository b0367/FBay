function Login(... input){
  if(getCookie("username") == ""){
      $.getJSON("https://fbay-server.herokuapp.com/users/get?username=" + document.getElementById('username').value) 
  }
  else{
      $.getJSON("https://fbay-server.herokuapp.com/users/get?username=" + getCookie("username")) 
  }
  function(data){
      let realJSON = JSON.parse(data.message);
      if(realJSON.password == document.getElementById('password').value){
        alert(realJSON.username + " " + realJSON.password + " " + realJSON.email);  
        document.cookie = "username" + realJSON.username;
      }
      else{
        alert("Incorrect Username or Password");
      }
  });
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.value);
    }
  }
  return "";
}