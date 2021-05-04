var menuBox     = $('.menu div'),
    menuItems   = $('.menu h2').not('.label'),
    label       = $('.menu h2.label'),
    headerPoint = $("section.point");

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        hideMenu();
    }
    else {
        showMenu();
        label.text('menu');
    }
});

label.click(function () {
    showMenu();
});

function hideMenu() {
    menuItems.addClass('hide');
    label.removeClass('hide');
    setTimeout(function () {
        menuBox.height(44);
    }, 50);
};

function showMenu() {
    menuItems.removeClass('hide');
    label.addClass('hide');
    menuBox.height(160);
    // setTimeout(function () {
        
    // }, 50);
};

function changeLabel(point) {
    var     section = $(point),
            dkTitle = section.find('.dk>h2').text(),
            enTitle = section.find('.en>h2').text(),
            dkMenu  = $('.dk>h2.label'),
            enMenu  = $('.en>h2.label');

            enMenu.text(enTitle);
            dkMenu.text(dkTitle);

            console.log(section);
} 

headerPoint.waypoint({
  handler: function(direction) {
    if (direction === 'down') {
        changeLabel(this.element);
    }
  },
  offset: 100
});

headerPoint.waypoint({
    handler: function(direction) {
      if (direction === 'up') {
          changeLabel(this.element);
      }
    },
    offset: function() {
        return -this.element.clientHeight
      }
  });