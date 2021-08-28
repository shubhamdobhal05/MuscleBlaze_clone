function checkcredentials() {

  let form = document.getElementById("login");
  let mobileno = form.mobileno.value;
  let password = form.password.value;


  let arr;
  arr = JSON.parse(localStorage.getItem("details"));

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].mobileno === mobileno && arr[i].password === password) {
      window.location.href = "product.html"
    }
    else {
      let div = document.createElement("div");
      div.innerHTML = "Invalid Mobile Number or Password"
      let alert = document.getElementById("alert");
      alert.innerHTML = null;
      alert.append(div);
    }
  }


}
window.onscroll = function() {
  stickyNavBar()
};

let nav = document.getElementById("content-wrapper");

let sticky = nav.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    nav.setAttribute("class", "sticky")
  } 
}

function signinpage() {
  window.location.href = "signin.html";
}