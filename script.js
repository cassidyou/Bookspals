//Sticky header
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("sticky-top");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-top")
  } else {
    navbar.classList.remove("sticky-top");
  }
}


//tab

function openTab(evnt, heading){
  //Declare all variables
  var i, tabContent, tabLinks;

  //Get all elements with class="tab-content" and hid them
  tabContent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = "none";
  }

  //Get all elements with class="tablinks" and remove the class "active"
  tabLinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }

  //show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(heading).style.display = 'block';
  evnt.currentTarget.className += " active";
  
} 

document.getElementById("defaultOpen").click()


function addeffect(evt, id){
  var i, tabLinks;
  tabLinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace('.activeTab', " ");
  }
  document.getElementById(id).classList.add(".activeTab");
  evt.currentTarget.className += ".activeTab";
}


//carousel
const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));



//Accordion
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('question');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}




