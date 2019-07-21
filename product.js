var urlParams = new URLSearchParams(window.location.search);


$.getJSON("https://fbay-server.herokuapp.com/items/?id=" + urlParams.get("id"), (data)=>{
  var realjson = JSON.parse(data.message);
  document.getElementById("name").innerText = realjson.name;
  document.getElementById("description").innerText = realjson.description;
  document.getElementById("imgurl").src = realjson.imageurl;
  document.getElementById("price").innerHTML = "List price: <b>$" + realjson.price + "</b>";
  document.getElementById("current").innerHTML = "Now: <b>$" + (realjson.price + ((Math.floor(Math.random() * 25) + 25) * realjson.increment)) + "<b/>";
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
  let increment = document.getElementById("increment").value;
  $.getJSON("")
}
