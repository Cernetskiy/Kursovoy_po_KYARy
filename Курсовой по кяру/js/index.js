let items = document.querySelectorAll(".item");
let arcs=document.querySelector("#arc").querySelectorAll(".item");
let recoms=document.querySelector("#recom").querySelectorAll(".item");
let populs=document.querySelector("#popul").querySelectorAll(".item");
let nals=document.querySelector("#nal").querySelectorAll(".item");
function funcXml(){
    fetch('index.xml')
.then(res => res.text())
.then(xmlString => {
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
let prods = xmlDoc.getElementsByTagName('prod');
let k=0;
for(let i = 0; i < arcs.length; i++){
    for(let j=k;j<items.length;j++)
    {
    if(prods[j].getElementsByTagName("discount")[0].childNodes[0].nodeValue!==" ")
    {
    arcs[i].querySelector(".skidka").innerHTML = prods[j].getElementsByTagName("discount")[0].childNodes[0].nodeValue;
    arcs[i].querySelector("#pri").innerHTML = prods[j].getElementsByTagName("price")[0].childNodes[0].nodeValue;
    arcs[i].querySelector("#name").innerHTML = prods[j].getElementsByTagName("pname")[0].childNodes[0].nodeValue;
   arcs[i].querySelector("#fimg").src= prods[j].getElementsByTagName("im")[0].childNodes[0].nodeValue;
   k=j+1;break;
    }
}}
k=0;
for(let i = 0; i < populs.length; i++){
    for(let j=k;j<items.length;)
    {
     populs[i].querySelector(".skidka").innerHTML = prods[j].getElementsByTagName("discount")[0].childNodes[0].nodeValue;
    populs[i].querySelector("#pri").innerHTML = prods[j].getElementsByTagName("price")[0].childNodes[0].nodeValue;
    populs[i].querySelector("#name").innerHTML = prods[j].getElementsByTagName("pname")[0].childNodes[0].nodeValue;
   populs[i].querySelector("#fimg").src= prods[j].getElementsByTagName("im")[0].childNodes[0].nodeValue;
  k++;break;
    }
}
k=recoms.length;
for(let i = 0; i < recoms.length; i++){
    for(let j=k;j<items.length;)
    {
     recoms[i].querySelector(".skidka").innerHTML = prods[j].getElementsByTagName("discount")[0].childNodes[0].nodeValue;
    recoms[i].querySelector("#pri").innerHTML = prods[j].getElementsByTagName("price")[0].childNodes[0].nodeValue;
    recoms[i].querySelector("#name").innerHTML = prods[j].getElementsByTagName("pname")[0].childNodes[0].nodeValue;
   recoms[i].querySelector("#fimg").src= prods[j].getElementsByTagName("im")[0].childNodes[0].nodeValue;
  k--;break;
    }
}

nals[0].querySelector(".skidka").innerHTML = prods[0].getElementsByTagName("discount")[0].childNodes[0].nodeValue;
    nals[0].querySelector("#pri").innerHTML = prods[0].getElementsByTagName("price")[0].childNodes[0].nodeValue;
    nals[0].querySelector("#name").innerHTML = prods[0].getElementsByTagName("pname")[0].childNodes[0].nodeValue;
   nals[0].querySelector("#fimg").src= prods[0].getElementsByTagName("im")[0].childNodes[0].nodeValue;

})}
funcXml();

let recs =document.querySelectorAll(".rec");
//  readXml(src="index.xml");
 let sliderImages = document.querySelectorAll(".ad"),
dots = document.querySelectorAll(".dot-navigation__item"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
dot1=document.querySelector("#dot1"),
dot2=document.querySelector("#dot2"),
dot3=document.querySelector("#dot3"),
dot4=document.querySelector("#dot4"),
dot5=document.querySelector("#dot5"),
dot6=document.querySelector("#dot6"),
dot7=document.querySelector("#dot7"),
dot8=document.querySelector("#dot8"),
current = 0;

// Clear all images
function reset() {
for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
    dots[i].style.backgroundColor="white";
}
}

// Initial slide
function startSlide() {
reset();
sliderImages[0].style.display = "block";
dots[0].style.backgroundColor= "rgb(53, 53, 173)";

}

// Show previous
function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
dots[current-1].style.backgroundColor= "rgb(53, 53, 173)";
current--;
}

// Show next
function slideRight() {
reset();
if (current === sliderImages.length - 1) {
    current = -1;
}
sliderImages[current + 1].style.display = "block";
dots[current+1].style.backgroundColor= "rgb(53, 53, 173)";
current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
if (current === 0) {
    current = sliderImages.length;
}
slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
if (current === sliderImages.length - 1) {
    current = -1;
}
slideRight();
});
dot1.addEventListener("click", function () {
reset();
sliderImages[0].style.display = "block";
current=0;
dots[0].style.backgroundColor= "rgb(53, 53, 173)";

});
dot2.addEventListener("click", function () {
reset();
sliderImages[1].style.display = "block";
current=1;
dots[1].style.backgroundColor= "rgb(53, 53, 173)";

});
dot3.addEventListener("click", function () {
reset();
sliderImages[2].style.display = "block";
current=2;
dots[2].style.backgroundColor= "rgb(53, 53, 173)";

});
dot4.addEventListener("click", function () {
reset();
sliderImages[3].style.display = "block";
current=3;
dots[3].style.backgroundColor= "rgb(53, 53, 173)";

});
dot5.addEventListener("click", function () {
reset();
sliderImages[4].style.display = "block";
current=4;
dots[4].style.backgroundColor= "rgb(53, 53, 173)";

});
dot6.addEventListener("click", function () {
reset();
sliderImages[5].style.display = "block";
current=5;
dots[5].style.backgroundColor= "rgb(53, 53, 173)";

});
dot7.addEventListener("click", function () {
reset();
sliderImages[6].style.display = "block";
current=6;
dots[6].style.backgroundColor= "rgb(53, 53, 173)";

});
dot8.addEventListener("click", function () {
reset();
sliderImages[7].style.display = "block";
current=7;
dots[7].style.backgroundColor= "rgb(53, 53, 173)";

});
setInterval(slideRight,5000);
window.onload = startSlide;
startSlide();