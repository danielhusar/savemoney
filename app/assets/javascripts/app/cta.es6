$('.js__cta').each(function() {
  $(this).on('submit', function(e) {
    e.preventDefault()
    const $form = $(this)
    const $email = $('input[type="email"]', $form)
    const $submit = $('button[type="submit"]', $form)
    $submit.addClass('loading')
    $email.removeClass('error')

    $.ajax({
      url: $form.attr('action'),
      data: { email: $email.val() },
      method: $form.attr('method'),
      dataType: 'json',
    }).then(() => {
      $form.addClass('success')
    }, () => {
      $submit.removeClass('loading')
      $email.addClass('error')
    })
  })
})
