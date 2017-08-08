var toggleMobileClasses = function (){
    $mobileMenu.toggleClass('open');
    $crest.toggleClass('mobileMenuOpen');
};

/* PAGES AJAX LOAD */

var leftNavigation = document.getElementById('leftMenu');
var rightNavigation = document.getElementById('rightMenu');
var mobileNavigation = document.getElementById('mobileMenu');
var changeContent = function (event) {
    console.log(event);
    var content = document.getElementById('content');
    newContentPath = event.srcElement.parentNode.attributes[0].value;
    var xhr= new XMLHttpRequest();
    xhr.open('GET', '/RosslareRangers/pages/' + newContentPath + '.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        content.innerHTML= this.responseText;
        content.scrollTop = 0;                          //TODO - not working
        if (newContentPath === 'clubinfo'){
            initMap();
        }
        // if (newContentPath === 'gallery'){
        //     gridify();
        // }
    };
    xhr.send();
}

leftNavigation.addEventListener('click', changeContent, false);
rightNavigation.addEventListener('click', changeContent, false);
mobileNavigation.addEventListener('click', function(event) {
    changeContent(event);
    toggleMobileClasses();
    Menu.activateMenu();
}, false);


/* GOOGLE MAP */

var initMap = function () {
    var grounds = {lat: 52.245091, lng: -6.334535};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: grounds,
        mapTypeId: 'satellite',
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite']
          }
    });
    var marker = new google.maps.Marker({
        position: grounds,
        map: map,
        title: 'Martley Park, Rosslare Harbour',
        animation: google.maps.Animation.DROP
    });
};

/* GRIDIFY */

function gridify() {
    var options =
    {
         srcNode: 'img',             // grid items (class, node)
         margin: '20px',             // margin in pixel, default: 0px
         width: '216px',             // grid item width in pixel, default: 220px
         max_width: '',              // dynamic gird item width if specified, (pixel)
         resizable: true,            // re-layout if window resize
         transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
    }
    $('#gridifyContainer').gridify(options);
}

/* CODE OF RESPECT */

$('body').on('click', '.codeGroup', function (e) {
    e.preventDefault();
    var $code = $('.code');
    var $codeGroup = $('.codeGroup');
    $codeGroup.removeClass('current');
    $code.hide();
    var link = $(this).data(link);
    $(this).addClass('current');
    $('#' + link.link).show();
});

/* NAVICON ANIMATION*/

var Menu = {

    el: {
        ham: $('#navicon'),
        menuTop: $('.menu-top'),
        menuMiddle: $('.menu-middle'),
        menuBottom: $('.menu-bottom')
    },

    init: function() {
        Menu.bindUIactions();
    },

    bindUIactions: function() {
        Menu.el.ham.on('click', function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
        });
    },

    activateMenu: function() {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');
    }
};

Menu.init();

/* MOBILE NAV */

var $navicon = $('#navicon');
var $mobileMenu = $('#mobileMenu');
var $crest = $('.crest');
    $navicon.on("click", toggleMobileClasses)
