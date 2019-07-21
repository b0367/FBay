var urlParams = new URLSearchParams(window.location.search);


$.getJSON("https://fbay-server.herokuapp.com/items/?id=" + urlParams.get("id"), (data)=>{
  var realjson = JSON.parse(data.message);
  document.getElementById("name").innerText = realjson.name;
  document.getElementById("description").innerText = realjson.description;
  document.getElementById("imgurl").src = realjson.imageurl;
  document.getElementById("price").innerText = "$" + realjson.price;
  document.getElementById("current").innerText = "$" + (realjson.price + ((Math.floor(Math.random() * 25) + 25) * realjson.increment));
});

function timer(){
    var sec = 59;
    var timer = setInterval(function(){
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            document.getElementById('timerDisplay').innerHTML="Time's Up!"
            document.getElementById('timerDisplay').style.color = "red";
        }
    }, 1000);
}

timer();
