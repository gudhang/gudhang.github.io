
var $formBorrowedBook = $('form#peminjam-form'),
urlBorrowedBook = 'https://script.google.com/macros/s/AKfycbzdaD-6vEOYQKADxCHFv_EKykPBjbUjiCYk5nMLHARyoi-GIz-G/exec'

$(document).ready(function() {

  $('form#peminjam-form').bootstrapValidator({       
    fields: {
        peminjam_fullname: {
         message: 'Nama Lengkap tidak valid',
            validators: {
                notEmpty: {
                    message: 'Nama Lengkap tidak boleh kosong'
                },
            }
        },
        peminjam_phone: {
            message: 'Nomor Telepon Whatsapp tidak valid',
            validators: {
                notEmpty: {
                    message: 'Nomor Telepon Whatsapp tidak boleh kosong'
                }
            }
        },
        peminjam_address: {
            message: 'Alamat Rumah tidak valid',
            validators: {
                notEmpty: {
                    message: 'Alamat Rumah tidak boleh kosong'
                }
            }
        },
        peminjam_id: {
            message: 'Nomor Keanggotaan tidak valid',
            validators: {
                notEmpty: {
                    message: 'Nomor Keanggotaan tidak boleh kosong'
                }
            }
        },
        peminjam_book_id: {
            message: 'Kode Buku tidak valid',
            validators: {
                notEmpty: {
                    message: 'Kode Buku tidak boleh kosong'
                }
            }
        },
        lama_peminjaman: {
            message: 'Lama Peminjaman tidak valid',
            validators: {
                notEmpty: {
                    message: 'Lama Peminjaman tidak boleh kosong'
                }
            }
        },
        peminjam_reason: {
            message: 'Alasan meminjam buku tidak valid',
            validators: {
                notEmpty: {
                    message: 'Silahkan isi alasan Anda meminjam buku'
                }
            }
        },

    }
  })
  .on('success.form.bv', function(e) {
      e.preventDefault();

      var bv = $formBorrowedBook.data('bootstrapValidator');

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