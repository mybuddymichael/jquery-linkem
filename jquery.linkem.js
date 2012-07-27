// jquery.linkem.js
// Copyright Michael Hanson
// https://github.com/mybuddymichael/jquery-linkem

(function() {
  var $;

  $ = this.jQuery;

  $.fn.linkem = function() {
    var linked;
    linked = this;
    return this.on("keyup mouseup", function() {
      var text;
      text = $(this).val();
      return linked.each(function() {
        return $(this).text(text);
      });
    });
  };

  return this;

}).call(this);
