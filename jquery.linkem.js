// jquery.linkem.js
// Copyright Michael Hanson
// https://github.com/mybuddymichael/jquery-linkem

(function( $ ) {

  $.fn.linkem = function(options) {
    var settings = {
      mode : "text"
    }
    if( options ){
      $.extend(settings, options)
    }
    var linked = this;
    this.on( "input change", function() {
    	if( settings.mode === "text" ){
	      linked.text( $(this).val() );
	    } else if( settings.mode === "html" ){
	    	linked.html( $(this).val() );
	    }
    });
  };

  return this;

})( jQuery );
