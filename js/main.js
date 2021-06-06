document.addEventListener('DOMContentLoaded', function () {

  //slider
  var mainSlider = new Swiper('.main-slider', {
    speed: 800,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

  //inputmask

  var phone = document.querySelectorAll("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(phone);

  //E-mail Ajax Send
  $("form").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function () {
      callbackModal.close();
      submitModal.open();
      $('.form').css('width', '100%');
      setTimeout(function () {
        // Выполнено
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  // modals
  var submitModal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Закрыть",
    cssClass: ['submit-modal'],
  });

  submitModal.setContent('<div class="modal__content"><h2 class="title modal__title">Спасибо!</h2><span class="step__select-title">Мы свяжемся с вами в течение 20 минут</span></div>');

  // scroll menu
  const menuBlock = document.querySelector('.nav'),
    page = document.querySelector('.page');


  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 200) {
      menuBlock.classList.add('nav--fixed');
      page.classList.add('page--scroll');
    } else if (window.pageYOffset < 200) {
      menuBlock.classList.remove('nav--fixed');
      page.classList.remove('page--scroll');
    }
  });


  // contacts 

  const contactBtn = document.querySelector('.contact-block__btn'),
    contactList = document.querySelector('.contact-block__list');

  contactBtn.addEventListener('click', function (e) {
    e.preventDefault();
    contactBtn.classList.toggle('contact-block__btn--active');
    contactList.classList.toggle('contact-block__list--active');
  });

  // mobile menu 

  const menuBtn = document.querySelector('.mobile-menu__toggle'),
    menuClose = document.querySelector('.mobile-menu__close'),
    menuList = document.querySelector('.mobile-menu__wrapper');

  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menuList.classList.toggle('mobile-menu__wrapper--active');
  });
  menuClose.addEventListener('click', function (e) {
    e.preventDefault();
    menuList.classList.toggle('mobile-menu__wrapper--active');
  });

  // sub-menu

  var menuItems = document.querySelectorAll('.menu-item-has-children');

  function resetMenuItems() {
    menuItems.forEach((menuItem) => {
      if (menuItem.classList.contains('active')) {
        menuItem.classList.remove('active');
      }
    });
  }
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', function (e) {
      e.preventDefault();
      if (menuItem.classList.contains('active')) {
        menuItem.classList.remove('active');
      } else {
        resetMenuItems();
        menuItem.classList.add('active');
      }

    });
  });

  // about - catalog

  const aboutBtn = document.querySelector('.about__show-more'),
        aboutBlock = document.querySelector('.about__content');

        if(aboutBtn != null) {
          aboutBtn.addEventListener('click', function() {
            aboutBlock.classList.toggle('about__content--active');
            aboutBtn.classList.toggle('about__show-more--active');
            if (aboutBtn.classList.contains('about__show-more--active')) {
              aboutBtn.innerHTML = 'Свернуть';
            } else {
              aboutBtn.innerHTML = 'Развернуть';
            }
          });
        }
        

});