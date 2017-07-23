import inView from '../lib/in-view'

const inViewInstance = inView()
inViewInstance.threshold(.3)

let previousScroll = 0
let lastPos = 0

const isVisible = (el) => {
  const elemTop = el.getBoundingClientRect().top
  const elemBottom = el.getBoundingClientRect().bottom
  const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
  return isVisible
}

const setColor = (el, direction) => {
  let $active = $('[style]', el)[direction]()
  let delta = Math.abs(window.scrollY - lastPos)
  if (!$active.length || delta < 70 || !isVisible($active[0])) { return }

  lastPos = window.scrollY
  $('[data-color]').removeAttr('style')
  $active.css('color', $active.data('color'))
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
  }, 300)
})
