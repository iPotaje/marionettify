module.exports = Marionette.LayoutView.extend({

    el       : "#world"

  , template : require ( "../../tpl/layout.template.html" )

  , regions  : {

      menu    : "#menu",
      content : "#content"
  }
})
