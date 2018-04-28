$('p').click(function() {
	$(this).fadeToggle('slow');
});

$('h1').dblclick(function () {
	$(this).toggleClass('text-danger');
});

$('#btn1').click(function() {
	$(document).find('p').eq(2).html('Content changed');
});

$('#btn2').hover(function() {
	$('img').attr('src', 'http://placeimg.com/1200/100/animals');
});

$('#btn3').click(function() {
	var newElement = $("<p>Here comes new paragraph...</p>");
	$('p').last().after(newElement.clone());
});