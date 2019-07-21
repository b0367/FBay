var urlParams = new URLSearchParams(window.location.search);


$.getJSON("https://fbay-server.herokuapp.com/items/?id=" + urlParams.get("id"), (data)=>{
  var realjson = JSON.parse(data.message);
  document.getElementById("name").innerText = realjson.name;
  document.getElementById("description").innerText = realjson.description;
  document.getElementById("imgurl").src = realjson.imageurl;
  document.getElementById("price").innerText = "$" + realjson.price;
  document.getElementById("current").innerText = "$" + (realjson.price + ((Math.floor(Math.random() * 25) + 25) * realjson.increment));
  document.getElementById("increment").innerText = "$" + realjson.increment;
});