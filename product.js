let cart_data = JSON.parse(localStorage.getItem("myCart"));

let data_div = document.getElementById("data");

cart_data.forEach(function(p) {
        
    let div = document.createElement("div");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "div1");

    let p_heading = document.createElement("h6");
    p_heading.innerHTML = p.heading;

    let p_name = document.createElement("h4");
    p_name.innerHTML = p.name;

    let p_price = document.createElement("h4");
    p_price.innerHTML = p.price;

    let p_img = document.createElement("img");
    p_img.src = p.img
    p_img.style.width = "400px";
    p_img.style.marginTop = "20px"

    div1.append(p_name)
    div.append(p_img, div1);

    data_div.append(div);

    
});

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
