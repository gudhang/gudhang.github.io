
var $form = $('form#pemateri-form'),
url = 'https://script.google.com/macros/s/AKfycbwrPpoteFJUiNugy-CqPv-plU_EjIm309zfZ703JiktuxRxDPU/exec'

$(document).ready(function() {

  $('form#pemateri-form').bootstrapValidator({       
    fields: {
        pemateri_fullname: {
         message: 'Nama Lengkap tidak valid',
            validators: {
                notEmpty: {
                    message: 'Nama Lengkap tidak boleh kosong'
                },
            }
        },
        pemateri_phone: {
            message: 'Nomor Telepon Whatsapp tidak valid',
            validators: {
                notEmpty: {
                    message: 'Nomor Telepon Whatsapp tidak boleh kosong'
                }
            }
        },
        pemateri_email: {
            validators: {
                notEmpty: {
                    message: 'Masukkan alamat email Anda'
                },
                emailAddress: {
                    message: 'Alamat email tidak valid'
                }
            }
        },
        pemateri_schools: {
            message: 'Afiliasi tidak valid',
            validators: {
                notEmpty: {
                    message: 'Afiliasi tidak boleh kosong'
                }
            }
        }, 
        pemateri_address: {
            message: 'Alamat tidak valid',
            validators: {
                notEmpty: {
                    message: 'Alamat tidak boleh kosong'
                }
            }
        },
        pemateri_reason: {
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

      var bv = $form.data('bootstrapValidator');

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