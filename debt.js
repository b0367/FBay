
$.getJSON("https://fbay-server.herokuapp.com/users/get?username=" + getCookie("username").split("=")[1], function(data){
  let realJSON = JSON.parse(data.message);
  let debt = realJSON.debt;
  document.getElementById("debtt").innerHTML = "What you could've done with your $" + debt.toLocaleString('en') + " debt...";
  
  switch(Math.floor(Math.random()*6)){
    case 0:
      document.getElementById("donation").innerHTML = "You could have provided " + Math.floor((debt/10)) + " family(s) matresses so they don't have to sleep on the floor."
                document.getElementById("donationL").href = "https://donate.unhcr.org/int/general/~my-donation#";
      break;
    case 1:
      document.getElementById("donation").innerHTML = "You could have given " + Math.floor((debt/20) * 4) + " family(s) 15L buckets to transport clean water."
                document.getElementById("donationL").href = "https://donate.unhcr.org/int/general/~my-donation#";
      break;
    case 2:
      document.getElementById("donation").innerHTML = "You could have given " + Math.floor((debt/30) * 2) + " family(s) kitchen devices to prepare food."
                document.getElementById("donationL").href = "https://donate.unhcr.org/int/general/~my-donation#";
      break;
    case 3:
      if(debt > 75){

        document.getElementById("donation").innerHTML = " You could have given " + Math.floor((debt/75)) + " kid(s) vaccines."
                    document.getElementById("donationL").href = "https://donate.unicefusa.org/page/contribute/help-save-childrens-lives-29161";

      }
      else{
        document.getElementById("donation").innerHTML = "You could have sent your money to the Red Cross to help across the world in medical affairs."
                    document.getElementById("donationL").href = "https://www.icrc.org/en/donate";
      }
      break;
    case 4:
      document.getElementById("donation").innerHTML = "You could have sent your money to the IFRC to help with disaster relief across the world."
                document.getElementById("donationL").href = "https://www.ifrc.org/en/donate-us/";
      break;
    case 5:
      document.getElementById("donation").innerHTML = "You could have sent your money to OCHA to help with humanitarian affairs around the world."
                document.getElementById("donationL").href = "https://www.unocha.org/our-work/humanitarian-financing/country-based-pooled-funds-cbpf/how-support-country-based-pooled";
      break;
    case 6:
      document.getElementById("donation").innerHTML = "You could have sent your money to Care to help impoverished kid(s)";
                document.getElementById("donationL").href = "https://my.care.org/site/Donation2";
      break;
  }
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