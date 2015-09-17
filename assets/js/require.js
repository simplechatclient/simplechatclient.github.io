require.config({
  paths: {
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js',
    bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js',
    fancybox: '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.pack.js',
    scc: '//simplechatclient.github.io/assets/js/scc.js'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});
