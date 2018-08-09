
  var $formSiswa = $('form#siswa-form'),
  urlSiswa = 'https://script.google.com/macros/s/AKfycbzmfxmVog56ucw8evHP_Cr7pyPXGdQnYUb5qgRwRGPGaK97_aU/exec'

$(document).ready(function() {
$('#submit-siswa-form').on('click', function(e) {
    e.preventDefault();
    $('#registrasi-siswa-form').modal('hide');
    var jqxhr = $.ajax({
      url: urlSiswa,
      method: "POST",
      dataType: "json",
      data: $formSiswa.serialize(),
      success: function (response) {
        $('#thankyou-message1').modal('show');
      },
    }).fail(function(response) {
          alert("Failed");
      });
});
});