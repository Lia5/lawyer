$(document).ready(function() {
  
    //E-mail Ajax Send
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "../mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
  
  });
  //select-number form

jQuery(function($){
  $(".phone-mask").mask("+38(999) 999-9999");
});
  $('.open-phone').click(function() {
    $('.fix-menu__item .form__wrapper').toggleClass('open');
    $('.select-number .form__wrapper').toggleClass('open');
  });

  $('.select-number .select-button-number').click(function() {
    $('.select-number .form__wrapper').toggleClass('open');
  });