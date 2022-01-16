/*
  * @package Food Circles
  * Main JS
*/

// Navigation
window.onscroll = function (e) {
	// Select Sticky Header
    var element = document.querySelector("#navigation");
	
	// If Scroll then show sticky header
	if(window.scrollY >= 200){
		element.classList.add("sticky");
	}else{
		element.classList.remove("sticky");
	}
}

// Hamburger Navigation
var hamburgerIcon = document.getElementById("hamburger__icon");
var body = document.getElementsByTagName("body")[0];
function Hamburger() {
  if (body.classList.contains("hamburger__open")) {
    body.classList.remove("hamburger__open");
    hamburgerIcon.innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    body.classList.add("hamburger__open");
    hamburgerIcon.innerHTML = "<i class='fal fa-times'></i>";
  }
}
hamburgerIcon.addEventListener("click", function () {
  Hamburger();
});

// Special Menu
var specialMenuItemsData = [{
  "id": 1,
  "name": "Pizza",
  "img": "./assets/images/menus/product1.png"
},{
  "id": 2,
  "name": "Pasta",
  "img": "./assets/images/menus/product2.png"
},{
  "id": 3,
  "name": "Burger",
  "img": "./assets/images/menus/product3.png"
},{
  "id": 4,
  "name": "Combo",
  "img": "./assets/images/menus/feature-small-1.png"
},{
  "id": 5,
  "name": "Noddles",
  "img": "./assets/images/menus/feature-small-2.png"
},{
  "id": 6,
  "name": "Fride",
  "img": "./assets/images/menus/feature-small-3.png"
},{
  "id": 7,
  "name": "Pinut",
  "img": "./assets/images/menus/04.png"
},{
  "id": 8,
  "name": "Bread",
  "img": "./assets/images/menus/05.png"
},{
  "id": 9,
  "name": "Juice",
  "img": "./assets/images/menus/08.png"
},{
  "id": 10,
  "name": "Biskut",
  "img": "./assets/images/menus/02.png"
},{
  "id": 11,
  "name": "Halim",
  "img": "./assets/images/menus/01.png"
},{
  "id": 12,
  "name": "Donut",
  "img": "./assets/images/menus/03.png"
},{
  "id": 13,
  "name": "Pitha",
  "img": "./assets/images/menus/09.png"
},{
  "id": 14,
  "name": "Kalo Vuna",
  "img": "./assets/images/menus/25.jpg"
}];
var specialMenuWrapper = document.querySelector(".special__menu__grid");
specialMenuItemsData.forEach(specialMenuItemData => {
  var specialMenuItem = document.createElement("div");
  specialMenuItem.classList.add("special__menu__item");

  specialMenuItem.innerHTML = '<img src="'+specialMenuItemData.img+'" alt="Food Picture" class="special__menu__img img-fluid" /> <h2 class="special__menu__item__name">'+specialMenuItemData.name+'</h2> <p class="special__menu__item__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><div class="special__item__overly"></div>';

  specialMenuWrapper.append(specialMenuItem);
});


// Tenstimonal
function Testimonial(dir){
  var testimonialWrapper = document.querySelector(".rating__wrapper");
  var testimonialItems = [].slice.call(testimonialWrapper.children);
  var testimonialItemsCount = testimonialWrapper.childElementCount;
  var testimonialActive = document.querySelector(".rating__wrapper .active");
  var testimonialActiveIndex = Array.prototype.indexOf.call(testimonialWrapper.children, testimonialActive);
  var testimonialItemNext = testimonialItems[(testimonialActiveIndex + 1)];
  var testimonialItemPrev = testimonialItems[(testimonialActiveIndex - 1)];
  var testimonialItemLast = testimonialItems[(testimonialItemsCount - 1)];
  var testimonialFirstItem = testimonialItems[0];
  var testimonialWidth = testimonialFirstItem.offsetWidth;
  var testimonialNextLeft = testimonialWidth * (testimonialActiveIndex + 1);
  var testimonialPrevLeft = testimonialWidth * (testimonialActiveIndex - 1);
  var testimonialFullLeft = testimonialWidth * (testimonialItemsCount - 1);


  if(dir == "next" && testimonialItemsCount > 1){
    if((testimonialActiveIndex + 1 ) == testimonialItemsCount){
      testimonialFirstItem.style.marginLeft = "0px";
      testimonialActive.classList.remove("active");
      testimonialFirstItem.classList.add("active");
    }else{
      testimonialFirstItem.style.marginLeft = "-"+testimonialNextLeft+"px";
      testimonialActive.classList.remove("active");
      testimonialItemNext.classList.add("active");
    }
  }else if(dir == "prev" && testimonialItemsCount > 1){
    if((testimonialActiveIndex + 1) == 1){
      testimonialFirstItem.style.marginLeft = "-"+testimonialFullLeft+"px";
      testimonialActive.classList.remove("active");
      testimonialItemLast.classList.add("active");
    }else{
      testimonialFirstItem.style.marginLeft = "-"+testimonialPrevLeft+"px";
      testimonialActive.classList.remove("active");
      testimonialItemPrev.classList.add("active");
    }
  }

}