var menuBox     = $('.menu div'),
    menuItems   = $('.menu h2'),
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

menuBox.mouseenter(function () {
    showMenu();
});

function hideMenu() {
    menuItems.addClass('hide');
};

function showMenu() {
    menuItems.removeClass('hide');
};

function changeLabel(point) {
    var     section     = $(point),
            id          = section.attr('id'),
            thisClass   = '.'+id,
            active      = menuBox.find(thisClass),
            other       = menuBox.find('h2').not(thisClass);
            
            other.removeClass('active').addClass('hide');
            active.removeClass('hide').addClass('active');
            
            // dkMenu  = $('.dk>h2.label'),
            // enMenu  = $('.en>h2.label');

            // enMenu.text(enTitle);
            // dkMenu.text(dkTitle);

            console.log(thisClass);
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