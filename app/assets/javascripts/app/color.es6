import inView from '../lib/in-view'

const inViewInstance = inView()
inViewInstance.threshold(.3)

let transition = false
let previousScroll = 0

const isVisible = (el) => {
  const elemTop = el.getBoundingClientRect().top
  const elemBottom = el.getBoundingClientRect().bottom
  const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
  return isVisible
}

const setColor = (el, direction) => {
  let $active = $('[style]', el)[direction]()
  if (!$active.length || transition || !isVisible($active[0])) { return }

  transition = true
  window.setTimeout(() => {
    $('[data-color]').removeAttr('style')
    $active.css('color', $active.data('color'))
    transition = false
  }, 200)
}

inViewInstance('[data-features]').on('enter', el => {
  $(window).off('scroll.feature').on('scroll.feature', function() {
    const currentScroll = $(this).scrollTop()
    if (currentScroll > previousScroll){
      setColor(el, 'next')
    } else {
      setColor(el, 'prev')
    }
    previousScroll = currentScroll
  })
})

inViewInstance('[data-features]').on('exit', () => {
  $(window).off('scroll.feature')
  window.setTimeout(() => {
    $('[data-color]').removeAttr('style')
    const $first = $('[data-color]').first()
    $first.css('color', $first.data('color'))
  }, 500)
})
