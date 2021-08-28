function slideShow() {
    //creating an array of images
    var arr = ["https://img10.hkrtcdn.com/15708/bnr_1570789_o.jpg","https://img10.hkrtcdn.com/15708/bnr_1570799_o.jpg","https://img10.hkrtcdn.com/15644/bnr_1564359_o.jpg","https://img6.hkrtcdn.com/15709/bnr_1570825_o.jpg","https://img8.hkrtcdn.com/15644/bnr_1564367_o.jpg","https://img6.hkrtcdn.com/15644/bnr_1564355_o.jpg"];

    let div = document.getElementById("slideShow");

    //creating an img element
    let img = document.createElement("img");
    img.style.width = "100%"

    let i = 0;
    img.src = arr[0];  //setting img to first element of array

    div.append(img);   // appending img into div

    setInterval(function() {
        if(i == 6) {
            i = 0;
        }
        img.src = arr[i];
        i++;
    }, 4000);


}
slideShow();
function slideShow1() {
    //creating an array of images
    var arr = ["https://img4.hkrtcdn.com/15644/bnr_1564393_o.jpg","https://img8.hkrtcdn.com/15644/bnr_1564387_o.jpg","https://img2.hkrtcdn.com/15651/bnr_1565001_o.jpg","https://img2.hkrtcdn.com/15709/bnr_1570881_o.jpg","https://img2.hkrtcdn.com/15709/bnr_1570861_o.jpg","https://img10.hkrtcdn.com/15709/bnr_1570889_o.jpg"]

    let div = document.getElementById("slideShow1");

    let img1 = document.createElement("img");
    img1.style.marginLeft = "90px";
    let i = 0;
    img1.src = arr[0];
    
    div.append(img1);

    setInterval(function() {
        if(i == 6) {
            i = 0;
        }
        img1.src = arr[i];
        i++;
    }, 4000);


}
slideShow1();


//creating array of products
const products = [
    {
        heading : "WHEY PROTIEN",
        name : "MuscleBlaze Biozyme Whey Protien",
        price : "Rs129-Rs7999",
        img : "https://img10.hkrtcdn.com/12135/prd_1213419-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Ice-Cream-Chocolate_c_m.jpg"
    },
    {
        heading : "WHEY PROTIEN",
        name : "MuscleBlaze Whey Gold 100% Whey Protien Isolate",
        price : "Rs1424-Rs5439",
        img : "https://img8.hkrtcdn.com/12134/prd_1213357-MuscleBlaze-Whey-Gold-100-Whey-Protein-Isolate-4.4-lb-Rich-Milk-Chocolate_c_m.jpg"
    },
    {
        heading : "MULTIVITAMINS MEN",
        name : "MuscleBlaze MB Vite Gold",
        price : "Rs1499",
        img : "https://img10.hkrtcdn.com/11830/prd_1182919-MuscleBlaze-MB-Vite-Gold-Unflavoured-25-sachetspack_c_m.jpg"
    },
    {
        heading : "PLANT PROTIENS",
        name : "bGREEN Plant Protien by MuscleBlaze",
        price : "Rs324-Rs1949",
        img : "https://img2.hkrtcdn.com/14850/prd_1484901-bGREEN-Plant-Protein-by-MuscleBlaze-Chocolate-2.2-lb_c_m.jpg"
    },
    {
        heading : "ASHWAGANDHA",
        name : "MuscleBlaze Ayurveda for Performance",
        price : "Rs239",
        img : "https://img8.hkrtcdn.com/13665/prd_1366437-MuscleBlaze-Ayurveda-for-Performance-Ashwagandha-500mg-60-tablets_c_m.jpg"
    }

];

    const productJson = JSON.stringify(products);

    localStorage.setItem("myProduct", productJson);

    let myProduct = localStorage.getItem("myProduct");

    myProduct = JSON.parse(myProduct);

    
function showProduct() {
    let dataDiv = document.getElementById("whatsNew");

    myProduct.forEach(function(p) {
        
        let div = document.createElement("div");

        let p_heading = document.createElement("h6");
        p_heading.innerHTML = p.heading;

        let p_name = document.createElement("h4");
        p_name.innerHTML = p.name;

        let p_price = document.createElement("h4");
        p_price.innerHTML = p.price;

        let p_img = document.createElement("img");
        p_img.src = p.img
        p_img.style.width = "140px";

        div.onclick = function() {
            addToCart(p);
            window.location.href = "signin.html"
        }

        div.append(p_img, p_heading, p_name, p_price);

        dataDiv.append(div);
    });

}    

showProduct();
//checking if loacal storage has anything or not
if(localStorage.getItem("myCart") === null) {
    localStorage.setItem("myCart", JSON.stringify([])); //adding cart in local storage
}

function addToCart(p) {

    let cart_data = JSON.parse(localStorage.getItem("myCart"));

    cart_data.push(p);

    localStorage.setItem("myCart", JSON.stringify(cart_data));
};


//creating array of products
const more = [
    {
        name : "MuscleBlaze 100% Whey Protien Powder",
        data : "8.8lb, 121 Servings",
        img : "https://img6.hkrtcdn.com/12134/prd_1213325-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-8.8-lb-121-Servings-Rich-Milk-Chocolate_c_m.jpg",
        price : "Rs 6999"
    },
    {
        name : "MuscleBlaze Whey Gold 100% Protien Isolate",
        data : "4.4ld, Rich Milk Chocolate",
        img : "https://img8.hkrtcdn.com/12134/prd_1213357-MuscleBlaze-Whey-Gold-100-Whey-Protein-Isolate-4.4-lb-Rich-Milk-Chocolate_c_m.jpg",
        price : "Rs 5349"
    },
    {
        name : "Muscle Biozyme Whey Protien Isolate",
        data : "4.4lb, Gourmet Chocolate",
        img : "https://img8.hkrtcdn.com/11221/prd_1122057-MuscleBlaze-Biozyme-Whey-Isolate-4.4-lb-Gourmet-Chocolate_c_m.jpg",
        price : "Rs 5499"
    },
    {
        name : "MuscleBlaze Whey Gold Protien Isolate",
        data : "8.8lb, Rich Milk Chocolate",
        img : "https://img2.hkrtcdn.com/8194/prd_819321-MuscleBlaze-Whey-Gold-with-Digezyme-8.8-lb-Rich-Milk-Chocolate_c_m.jpg",
        price : "Rs 9599"
    }
];

    const more_json = JSON.stringify(more);

    localStorage.setItem("myMore", more_json);

    let myMore = localStorage.getItem("myMore");

    myMore = JSON.parse(myMore);

function showMore() {
    let dataDiv = document.getElementById("more");
    
    myMore.forEach(function(p) {
            
        let div = document.createElement("div");
    
        let p_data = document.createElement("h6");
        p_data.innerHTML = p.data;
    
        let p_name = document.createElement("h4");
        p_name.innerHTML = p.name;
    
        let p_price = document.createElement("h4");
        p_price.innerHTML = p.price;
    
        let p_img = document.createElement("img");
        p_img.src = p.img
        p_img.style.width = "140px";

        div.onclick = function() {
            addToCart(p);
            window.location.href = "signin.html"
        }
    
    
        div.append(p_img,p_name,p_data, p_price);
    
        dataDiv.append(div);
        });
    
    }    
    
showMore();
if(localStorage.getItem("myCart") === null) {
    localStorage.setItem("myCart", JSON.stringify([])); //adding cart in local storage
}

function addToCart(p) {

    let cart_data = JSON.parse(localStorage.getItem("myCart"));

    cart_data.push(p);

    localStorage.setItem("myCart", JSON.stringify(cart_data));
};
function addingTab(evt, ids) {
 

    // Get all elements with class="tabcontent" and hide them
    let tabContent = document.getElementsByClassName("tabContent");
    for ( var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    // Get all elements with class="tabBtn" and remove the class "active"
    let tabBtn = document.getElementsByClassName("tabBtn");
    for (var i = 0; i < tabBtn.length; i++) {
      tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(ids).style.display = "block";
    evt.currentTarget.className += " active";
  }