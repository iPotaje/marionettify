module.exports = function ( Controller ) {

  return Marionette.AppRouter.extend ({

      controller  : new Controller ()

    , appRoutes   : {

        ""              : "mainRoute"
      , "mainRoute"     : "mainRoute"
      , "anotherRoute"  : "anotherRoute"
    }
  });
}
