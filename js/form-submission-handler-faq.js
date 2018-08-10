var $formFaq = $('form#faq-form'),
urlFaq = 'https://script.google.com/macros/s/AKfycbzU_R0HJuplncps1sOV6Eo7f6Ds3UqcjGSw4l67TKw1ONFVqy_l/exec'

$(document).ready(function() {
$('#submit-faq-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: urlFaq,
    method: "POST",
    dataType: "json",
    data: $formFaq.serialize(),
    success: function (response) {
      alert("Pertanyaan Anda sudah berhasil kami rekam!")
    },
  }).fail(function(response) {
        alert("Failed");
    });
});
});