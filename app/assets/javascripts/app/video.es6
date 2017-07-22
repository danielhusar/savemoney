import inView from '../lib/in-view'

const inViewInstance = inView()

inViewInstance.threshold($(window).height() < 960 ? 0.5 : 1)
inViewInstance('video').on('enter', el =>  el.play())
