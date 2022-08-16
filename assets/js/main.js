$('.js-open-modal').click(function(event) {
    event.preventDefault();
    
    var modalName = $(this).attr('data-modal');
    var modal = $('.modal[data-modal="' + modalName + '"]');
    
    modal.addClass('is-show');
    $('.js-modal-overlay').addClass('is-show');
 });
 
 $('.modal__close').click(function() {
    $(this).parent('.modal').removeClass('is-show');
    $('.js-modal-overlay').removeClass('is-show');
 });
    
 $('.js-modal-overlay').click(function() {
    $('.modal.is-show').removeClass('is-show');
    $(this).removeClass('is-show');
 });

 $('.modal__slide').slick();





















