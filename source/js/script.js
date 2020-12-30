var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');

    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });

    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map(document.querySelector(".invitation__map"), {
        center: [59.938635, 30.323118],
        zoom: 14.2
      });
      myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-pin.png',
        iconImageSize: [57, 53],
        iconImageOffset: [-25, -50]
      });
      myMap.geoObjects.add(myPlacemark);
    };
