
  var $formDonasiBuku = $('form#donasi-buku-form'),
  urlDonasiBuku = 'https://script.google.com/macros/s/AKfycbwQ5911AZy-9fHBfZQnhGKVjKW-Q6Rgo4MxEg_eJnz-8XPvxOQ/exec'

$(document).ready(function() {
$('#submit-donasi-buku-form').on('click', function(e) {
    e.preventDefault();
    $('#donasi-buku-form').modal('hide');
    var jqxhr = $.ajax({
      url: urlDonasiBuku,
      method: "POST",
      dataType: "json",
      data: $formDonasiBuku.serialize(),
      success: function (response) {
        $('#thankyou-message-donasi').modal('show');
      },
    }).fail(function(response) {
          alert("Failed");
      });
});
});