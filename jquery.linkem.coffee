$ = @jQuery

$.fn.linkem = ->
  @on "keydown keyup mousedown mouseup", =>
    @text @val()

return this
