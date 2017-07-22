import inView from 'in-view'

inView.threshold($(window).height() < 960 ? 0.5 : 1)
inView('video').on('enter', el =>  el.play())
