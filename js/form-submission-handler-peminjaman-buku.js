
var $formBorrowedBook = $('form#peminjam-form'),
urlBorrowedBook = 'https://script.google.com/macros/s/AKfycbzdaD-6vEOYQKADxCHFv_EKykPBjbUjiCYk5nMLHARyoi-GIz-G/exec'

$(document).ready(function() {
$('#submit-peminjaman-form').on('click', function(e) {
    e.preventDefault();
    $('#meminjam-buku-form').modal('hide');
    var jqxhr = $.ajax({
      url: urlBorrowedBook,
      method: "POST",
      dataType: "json",
      data: $formBorrowedBook.serialize(),
      success: function (response) {
        $('#thankyou-message-meminjam').modal('show');
      },
    }).fail(function(response) {
          alert("Failed");
      });
});
});