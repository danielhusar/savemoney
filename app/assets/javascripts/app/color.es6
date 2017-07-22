import inView from 'in-view'

const $items = $('[data-color]')

$items.each(function() {
  const $item = $(this)
  const color = $item.data('color')

  inView(`[data-color="${color}"]`).on('enter', el => {
    $items.css('color', '')
    $(el).css('color', color)
  })
});
