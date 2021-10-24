var menuBox     = $('.menu div'),
    menuItems   = $('.menu h2'),
    headerPoint = $("section.point"),
    toggleDK    = $('.toggleDK'),
    toggleEN    = $('.toggleEN'),
    langEN      = $('.en'),
    langDK      = $('.dk');


$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        hideMenu();
    }
    else {
        showMenu();
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
}; 

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


toggleDK.click( function() {
    langDK.css('display', 'block');
    langEN.css('display', 'none');
});

toggleEN.click( function() {
    langEN.css('display', 'block');
    langDK.css('display', 'none');
});

$("body").on("mousemove",function(event) {
    var half=$(this).width()/2,
        dk  =$('div.dk'),
        en  =$('div.en');

    if (event.pageX < half) {
        dk.addClass('fade');
        en.removeClass('fade');

        console.log("left");
    }
    else {
        en.addClass('fade');
        dk.removeClass('fade');

        console.log("right");
    }
});