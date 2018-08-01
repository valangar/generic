//Author: Varsha Alangar
//CREATED ON: 03/22/2018
//LAST MODIFIED ON: 08/01/2018
//DESCRIPTION: Creating a page using Vanilla JS that allows user to press keys to generate drum sounds. 
var keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);

function playSound(ele) {
	var key = document.querySelector(`div[data-key = "${ele.keyCode}"]`);
	var audio = document.querySelector(`audio[data-key = "${ele.keyCode}"]`);
	key.classList.add("playing");
	audio.currentTime = 0;
	audio.play();
}
function removeTransition(ele) {
	if(ele.propertyName !== 'transform') {
		return;
	}
	console.log("remove");
	ele.target.classList.remove("playing");
}

