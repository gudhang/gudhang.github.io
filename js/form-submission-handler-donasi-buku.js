
var $formDonasiBuku = $('form#donasi-buku-form'),
urlDonasiBuku = 'https://script.google.com/macros/s/AKfycbwQ5911AZy-9fHBfZQnhGKVjKW-Q6Rgo4MxEg_eJnz-8XPvxOQ/exec'

$(document).ready(function() {

  $('form#donasi-buku-form').bootstrapValidator({       
    fields: {
        donatur_fullname: {
         message: 'Nama Lengkap tidak valid',
            validators: {
                notEmpty: {
                    message: 'Nama Lengkap tidak boleh kosong'
                },
            }
        },
        donatur_phone: {
            message: 'Nomor Telepon Whatsapp tidak valid',
            validators: {
                notEmpty: {
                    message: 'Nomor Telepon Whatsapp tidak boleh kosong'
                }
            }
        },
        donatur_address: {
            message: 'Alamat tidak valid',
            validators: {
                notEmpty: {
                    message: 'Alamat tidak boleh kosong'
                }
            }
        },
        daftar_sumbangan_buku: {
            message: 'Buku yang didonasikan tidak valid',
            validators: {
                notEmpty: {
                    message: 'Silahkan isi buku yang ingin Anda donasikan'
                }
            }
        },
        donatur_reason: {
            message: 'Alasan mendonasikan buku tidak valid',
            validators: {
                notEmpty: {
                    message: 'Silahkan isi alasan Anda mendonasikan buku'
                }
            }
        },

    }
  })
  .on('success.form.bv', function(e) {
      e.preventDefault();

      var bv = $formDonasiBuku.data('bootstrapValidator');

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