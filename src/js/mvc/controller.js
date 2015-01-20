module.exports    = function ( app, ContentView ) {

  return Marionette.Controller.extend ({

      mainRoute   : function () {

        app.layout.content.show ( new ContentView (
          { model : new Backbone.Model ( { message : "ninguno" } ) }
        ) );
      }

    , anotherRoute : function () {

        app.layout.content.show ( new ContentView (
          { model : new Backbone.Model ( { message : "this" } ) }
        ) );
      }
  });
}
