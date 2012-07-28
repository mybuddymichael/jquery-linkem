// jquery.linkem.js
// Copyright Michael Hanson
// https://github.com/mybuddymichael/jquery-linkem

(function( $ ) {

  $.fn.linkem = function() {
    var linked = this;
    this.on( "keydown keyup mousedown mouseup", function() {
      linked.text( $(this).val() );
    });
  };

  return this;

})( jQuery );
