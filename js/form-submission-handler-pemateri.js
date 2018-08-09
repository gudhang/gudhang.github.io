
  var $form = $('form#pemateri-form'),
  url = 'https://script.google.com/macros/s/AKfycbwrPpoteFJUiNugy-CqPv-plU_EjIm309zfZ703JiktuxRxDPU/exec'

$(document).ready(function() {
$('#submit-pemateri-form').on('click', function(e) {
    e.preventDefault();
    $('#registrasi-pemateri-form').modal('hide');
    var jqxhr = $.ajax({
      url: url,
      method: "POST",
      dataType: "json",
      data: $form.serialize(),
      success: function (response) {
        $('#thankyou-message1').modal('show');
      },
    }).fail(function(response) {
          alert("Failed");
      });
});
});