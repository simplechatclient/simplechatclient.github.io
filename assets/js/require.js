require.config({
	paths: {
		jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min',
		bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min',
		fancybox: '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.pack'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery']
		},
		'fancybox' : {
			deps: ['jquery']
		}
	}
});

require(['assets/js/app']);
