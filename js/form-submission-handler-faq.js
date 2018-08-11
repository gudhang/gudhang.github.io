var $formFaq = $('form#faq-form'),
urlFaq = 'https://script.google.com/macros/s/AKfycbzU_R0HJuplncps1sOV6Eo7f6Ds3UqcjGSw4l67TKw1ONFVqy_l/exec'

$(document).ready(function() {
  
  $('#submit-faq-form').on('click', function(e) {
    e.preventDefault();
    $("#submit-faq-form").prop('disabled', true);

    return empty();
    
  });

  function clearForms()
  {
    var i;
    for (i = 0; (i < document.forms.length); i++) {
      document.forms[i].reset();
    }
  }

  function empty() {
    var question, user_account;
    question = document.getElementById("question").value;
    user_account = document.getElementById("user_account").value;
    if (question == "" && user_account == "") {
      alert("Form tidak boleh kosong, silahkan lengkapi pertanyaan dan identitas Anda");
      $("#submit-faq-form").prop('disabled', false);
      return false;
    } else if (question == "" || user_account == "") {
      if (question == "") {
        alert("Silahkan isi pertanyaan Anda");
        $("#submit-faq-form").prop('disabled', false);
        return false;
      } else if (user_account == "") {
          alert("Masukkan Email / No. Tlp / Akun Media Sosial Anda");
          $("#submit-faq-form").prop('disabled', false);
          return false;
      };
    } else {
      var jqxhr = $.ajax({
        url: urlFaq,
        method: "POST",
        dataType: "json",
        data: $formFaq.serialize(),
        success: function (response) {
          clearForms();
          $('#thankyou-message2').modal('show');
          $("#submit-faq-form").prop('disabled', false);
          // $("input#question").val("");
          // $("input#user-account").val("");
        },
      }).fail(function(response) {
            alert("Failed");
            clearForms();
            $("#submit-faq-form").prop('disabled', false);
        });
    }
  }

});