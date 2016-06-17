var $baseUrl = 'http://www.cafeasia.com.sg';
$(document).ready(function() {
	
	// Phonegap loaded
	$(document).on('deviceready', function(event) {

		window.cache.clear();

		window.addEventListener('native.keyboardshow', function(e){
			$('.menu').hide();
			$('.body').css('height', '100%');
		});

		window.addEventListener('native.keyboardhide', function(e){
			$('.menu').show();
			calcMenuPosition();
		});

		// Calculate menu position and height
		calcMenuPosition();

		// Load iframe
		$('iframe').attr('src', $baseUrl);

		// Bind menu action
		bindMenu();

	});
});

function calcMenuPosition()
{
	// wait for all menu images loaded, calculate loaded images height [all depends on screen resolution]
	var menuHeight = $('.menu').height();
	$('.body').css('height', 'calc(100% - '+ menuHeight +'px)');
}

function bindMenu()
{
	var iframe = $('iframe');
	// bind click event on each menu
	$('.link').on('click', function(event) {
		event.preventDefault();

		// get menu action
		var $href = $(this).attr('href');

		// send action to iframe
		iframe.attr('src', $baseUrl + $href);
	});

	$('.have-sub').on('click', function(event) {
		event.preventDefault();
		$('.submenu').toggle();

		var height = $('.submenu').height() - 1;
		$('.submenu').css('top', '-' + height + 'px');
	});

	$('.submenu .link').click(function(event) {
		$('.submenu').hide();
	});
}