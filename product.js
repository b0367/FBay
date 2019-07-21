var urlParams = new URLSearchParams(window.location.search);


$.getJSON("https://fbay-server.herokuapp.com/items/?id=" + urlParams.get("id"), (data)=>{
  var realjson = JSON.parse(data.message);
  document.getElementById("name").innerText = realjson.name;
  document.getElementById("description").innerText = realjson.description;
  document.getElementById("imgurl").src = realjson.imageurl;
  document.getElementById("price").innerHTML = "List price: <b>$" + realjson.price + "</b>";
  let value = (realjson.price + ((Math.floor(Math.random() * 25) + 25) * realjson.increment));
  document.getElementById("current").innerHTML = "Now: <b>$" + value + "<b/>";
  document.getElementById("rawcurrent").innerText = value;
  document.getElementById("increment").innerText = realjson.increment;
});

function timer(){
    var sec = 59;
    var timer = setInterval(function(){
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
      if(sec<=9){
        document.getElementById('timerDisplay').innerHTML='00:0'+sec;
      }
              sec--;

        if (sec < 0) {
            document.getElementById('timerDisplay').innerHTML="<b>Time's Up!</b>"
            document.getElementById('timerDisplay').style.color = "maroon";
        }
    }, 1000);
}

timer();


function SubmitBid(){
  var urlParams = new URLSearchParams(window.location.search);
  let increment = document.getElementById("increment").innerText;
  let current = document.getElementById("rawcurrent").innerText;
  $.getJSON("https://fbay-server.herokuapp.com/bids/query?" + urlParams.get("id"), function(data){
    if(data.length >= 3){
       current = data.amount;
      document.getElementById("current").innerHTML = "Now <b>$" + current + "</b>";
    }
    $.getJSON("https://fbay-server.herokuapp.com/bids/create?username=" + getCookie("username").split("=")[1] + "&item=" + urlParams.get("id") + "&amount=" + (increment + current), function(data){
        if(data.message === "success"){
          alert("you placed a bid on the item!");
          document.getElementById("current").innerHTML = "Now <b>$" + current + "</b>";
        }else{
          alert("something went wrong, and the bid couldn't be placed.");
        }
      });
  });
}

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