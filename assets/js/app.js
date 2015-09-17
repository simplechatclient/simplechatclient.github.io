require(['jquery', 'bootstrap', 'fancybox'], function($, bootstrap, fancybox){

	$(document).ready(function() {
		fancybox();
		platform();
		buttons();
	});

	function fancybox()
	{
		if(typeof $.fancybox == 'function') {
			$('.fancybox').fancybox();
		}
	}

	function platform()
	{
		var isMobile = jQuery.browser.mobile;
		var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
		
		if (isMobile) { $('#mobile').show(); }
		else if (isWindows) { $('#windows').show(); }
		else { $('#linux').show(); }
	}

	function buttons()
	{
		$('#other_systems').click(function() {
			$('#windows').show();
			$('#linux').show();
			$('#mobile').show();
			
			$('#more').show();
			$('#other_systems_row').hide();
		});
	}
});

