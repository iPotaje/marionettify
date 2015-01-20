require ( './bootstrap' );

var   myApp         = new Marionette.Application ()

    , moduleName    = "myModule"
    , module        = require ('./module/module.part1') ( myApp, moduleName )
    , module        = require ('./module/module.part2') ( myApp, moduleName )

    , AppLayoutView = require ( './mvc/viewlayout.js' )

    , MenuView      = require ( './mvc/viewmenu.js' )
    , ContentView   = require ( './mvc/viewcontent.js' )

    , MyController  = require ( './mvc/controller.js' ) ( myApp, ContentView )

    , MyRouter      = require ( './mvc/router.js' )     ( MyController );

myApp.on ( "before:start", function () {

  myApp.layout = new AppLayoutView ()
    .render ();
  myApp.layout.menu.show ( new MenuView () );

  router = new MyRouter ();

  if ( Backbone.history ) {
    Backbone.history.start ();
  }

  console.log ( "The app is starting..." )
});

myApp.start ();

module.start ();
