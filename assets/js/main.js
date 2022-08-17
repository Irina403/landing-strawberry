$('.js-open-modal').click(function(event) {
    event.preventDefault();
    
    var modalName = $(this).attr('data-modal');
    var modal = $('.modal[data-modal="' + modalName + '"]');
    
    modal.addClass('is-show');

    $('.modal__slide').slick('setPosition');
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


$('.order').click(function(event) {
    event.preventDefault();

    var modal = $('.modal-form');
    modal.addClass('is-show');

    // document.querySelector('.modal').style.display = 'none';
    
    $('.js-modal-overlay').addClass('is-show');
    });

    $('.modal-form__close').click(function() {
        $(this).parent('.modal-form').removeClass('is-show');
        $('.js-modal-overlay').removeClass('is-show');
    });
        
    $('.js-modal-overlay').click(function() {
        $('.modal-form.is-show').removeClass('is-show');
        $(this).removeClass('is-show');
    });

    // if('modal').classList.conntains('is-show'){
    //     console.log('yes');
    // };
    $('.order').click(function(event) {
        if($('.modal').hasClass('is-show')){
            $('.modal').removeClass('is-show');
            // alert('У этого блока есть класс test1');
        }else{
            alert('У этого блока нет класса test1');
          }
      });
        

    $(document).ready(function(){
        $('.modal__slide ').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: "<img src='i/icons/arrow-left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='i/icons/arrow-right.svg' class='next' alt='2'>",
            responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
        
                  }
                }
            ]
        
        
        });
    });






















