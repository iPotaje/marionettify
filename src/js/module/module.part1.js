module.exports = function ( app, moduleName ) {

  return app.module( moduleName, function (
      theModule, app, Backbone, Marionette, $, _ ) {

    this.startWithParent = false;

    this.on ( 'start', function () {
      startFunction ();
    });
  });
};

var startFunction = function () {

  console.log ( "This is startFunction in part 1" );
};
