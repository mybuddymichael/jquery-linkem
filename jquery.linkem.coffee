$ = @jQuery

$.fn.linkem = ->
  linked = this
  @on "keyup mouseup", ->
    text = $(this).val()
    linked.each ->
      $(this).text(text)

return this
