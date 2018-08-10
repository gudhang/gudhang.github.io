
var $formSiswa = $('form#siswa-form'),
urlSiswa = 'https://script.google.com/macros/s/AKfycbzmfxmVog56ucw8evHP_Cr7pyPXGdQnYUb5qgRwRGPGaK97_aU/exec'

$(document).ready(function() {

  $('form#siswa-form').bootstrapValidator({       
    fields: {
        siswa_fullname: {
         message: 'Nama Lengkap tidak valid',
            validators: {
                notEmpty: {
                    message: 'Nama Lengkap tidak boleh kosong'
                },
            }
        },
        siswa_phone: {
            message: 'Nomor Telepon Whatsapp tidak valid',
            validators: {
                notEmpty: {
                    message: 'Nomor Telepon Whatsapp tidak boleh kosong'
                }
            }
        },
        siswa_email: {
            validators: {
                notEmpty: {
                    message: 'Masukkan alamat email Anda'
                },
                emailAddress: {
                    message: 'Alamat email tidak valid'
                }
            }
        },
        siswa_schools: {
            message: 'Afiliasi tidak valid',
            validators: {
                notEmpty: {
                    message: 'Afiliasi tidak boleh kosong'
                }
            }
        }, 
        siswa_address: {
            message: 'Alamat tidak valid',
            validators: {
                notEmpty: {
                    message: 'Alamat tidak boleh kosong'
                }
            }
        },
        siswa_reason: {
            message: 'Alasan bergabung tidak valid',
            validators: {
                notEmpty: {
                    message: 'Silahkan isi alasan Anda bergabung dengan kami'
                }
            }
        },

    }
  })
  .on('success.form.bv', function(e) {
      e.preventDefault();

      var bv = $formSiswa.data('bootstrapValidator');
      
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