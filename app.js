if (!document.location.hash) {
	document.location.hash = 1;
}

document.body.addEventListener('keyup', function(e) {
	var slide = document.location.hash.substr(1);

	if (e.keyCode === 37) {
		slide--;
	} else if (e.keyCode === 39) {
		slide++;
	}

	document.location.hash = slide;
});

