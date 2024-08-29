//Top Script
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
	mybutton.style.display = "block";
} else {
	mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


//Settings Script
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.setting')) {
	var dropdowns = document.getElementsByClassName("setting-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	var openDropdown = dropdowns[i];
	if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
	}
	}
}
}

function invertcolorFunction() {
	var element = document.body;
	element.classList.toggle("invert-color");
}



// COUNTER VIEW
var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_views");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_views", visitCount);
} 
else {
  visitCount = 1;
  localStorage.setItem("page_views", 1);
}

if(visitCount == 1){
  counterContainer.innerHTML = visitCount + "&nbsp;VOLTA";
}
else{
  counterContainer.innerHTML = visitCount + "&nbsp;VOLTE";
}


// SIDE NAVBAR
document.addEventListener("DOMContentLoaded", function () {
	const sidenavbar = document.getElementById("sidenavbar");
	const prenotazioneLezione = document.getElementById("prenotazione-lezione");
	const headers = document.querySelectorAll("h1, h2, h3, h4");
	
	headers.forEach(header => {
		const link = document.createElement("a");
		const text = header.textContent;
		const id = text.toLowerCase().replace(/\s+/g, "-");
		
		header.id = id;
		link.href = `#${id}`;
		link.textContent = text;
		
		if (header.tagName.toLowerCase() === "h1") {
			link.style.fontWeight = "bold";
		} 
		else if (header.tagName.toLowerCase() === "h2") {
			link.style.marginLeft = "20px";
			link.style.fontWeight = "normal";
		} 
		else if (header.tagName.toLowerCase() === "h3") {
			link.style.marginLeft = "40px";
			link.style.fontWeight = "normal";
			link.style.fontSize = "15px";
		}
		else if (header.tagName.toLowerCase() === "h4") {
			link.style.marginLeft = "40px";
			link.style.fontWeight = "normal";
			link.style.fontSize = "12px";
		}
		
		sidenavbar.appendChild(link);
	});
});
function openNav() {
	const sidenavbar = document.getElementById("sidenavbar");
	const prenotazioneLezione = document.getElementById("prenotazione-lezione");
	sidenavbar.classList.remove("closed");
	sidenavbar.classList.add("open");
	prenotazioneLezione.style.left = "270px"; // Sposta il bottone a destra
}

function closeNav() {
	const sidenavbar = document.getElementById("sidenavbar");
	const prenotazioneLezione = document.getElementById("prenotazione-lezione");
	sidenavbar.classList.add("closed");
	sidenavbar.classList.remove("open");
	prenotazioneLezione.style.left = "10px"; // Posizione originale del bottone
}