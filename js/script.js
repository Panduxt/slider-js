var image = document.querySelectorAll (".min__img__block img");
var block = document.querySelector (".big__slide img");
	var active_image = document.querySelector(".min__img__block span.active");

var next = document.querySelector('.next');
var prev = document.querySelector('.pref');

function removeActiveClass() {
	var allBlock = document.querySelectorAll (".min__img__block span");
	for (var j = 0; j < allBlock.length; j++) {
		allBlock[j].classList.remove ("active")
	}
}

if (image.length) {
	for (var i = 0; i < image.length; i++) {
		image[i].addEventListener ("click", function () {
			block.src = this.src;
			active_image = this.parentNode;

			removeActiveClass();

			this.parentNode.classList.add ("active");
		})
	}
}


next.addEventListener('click', function () {
	removeActiveClass();

	if(active_image.nextElementSibling){
		var im = active_image.nextElementSibling.querySelector('img');
		block.src = im.src;
		active_image = active_image.nextElementSibling;
		active_image.classList.add ("active");
	}else{
		var first_image = document.querySelector(".min__img__block span:first-child img");
		block.src = first_image.src;
		active_image = first_image.parentNode;
		active_image.classList.add ("active");
	}

});

prev.addEventListener('click', function () {
	removeActiveClass();

	if(active_image.previousElementSibling){
		var im = active_image.previousElementSibling.querySelector('img');
		block.src = im.src;
		active_image = active_image.previousElementSibling;
		active_image.classList.add ("active");
	}else{
		var last_image = document.querySelector(".min__img__block span:last-child img");
		block.src = last_image.src;
		active_image = last_image.parentNode;
		active_image.classList.add ("active");
	}

});

var timer;
var play = document.querySelector(".fa-play-circle");

play.addEventListener('click', function () {
	timer = setInterval(function () {
		next.click();
	}, 1000);
});