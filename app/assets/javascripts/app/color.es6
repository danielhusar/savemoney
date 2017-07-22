import inView from '../lib/in-view'

const inViewInstance = inView()
const $items = $('[data-color]')

inViewInstance.offset(100)
inViewInstance.threshold(1)

$items.each(function() {
  const $item = $(this)
  const color = $item.data('color')

  inViewInstance(`[data-color="${color}"]`).on('enter', el => {
    $items.css('color', '')
    $(el).css('color', color)
  })
});
