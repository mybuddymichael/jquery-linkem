$ = @jQuery

$.fn.linkem = ->
  linked = this
  @on "keyup", ->
    text = $(this).val()
    linked.each ->
      $(this).text(text)

return this
