$(function(){
	var body = $('body');
	var backgrounds = new Array(
		'url(images/bg-image-1.jpg)',
		'url(images/bg-image-2.jpg)',
		'url(images/bg-image-3.jpg)',
		'url(images/bg-image-4.jpg)'
		);
	var info = $('#info');
	var infotext = new Array(
		'Text slide 1',
		'Text slide 2',
		'Text slide 3',
		'Text slide 4'
		);
	var current = 0;
	var currentinfo = 0;

	function nextBackground(){
		body.css(
			'background-image',
			backgrounds[current = (current + 1) % backgrounds.length]
			);
		info.text(infotext[currentinfo = (currentinfo + 1) % infotext.length]);

		setTimeout(nextBackground, 4000);
	};

	body.click(function(){
		body.css('background-image', backgrounds[current = (current + 1) % backgrounds.length]);
		info.text(infotext[currentinfo = (currentinfo + 1) % infotext.length]);
	});

	setTimeout(nextBackground, 4000);
	body.css('background-image', backgrounds[0]);
	info.text(infotext[0]);

});