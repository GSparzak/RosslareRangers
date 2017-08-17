var toggleMobileClasses = function (){
    $mobileMenu.toggleClass('open');
    $crest.toggleClass('mobileMenuOpen');
};

/* PAGES AJAX LOAD */

var leftNavigation = document.getElementById('leftMenu');
var rightNavigation = document.getElementById('rightMenu');
var mobileNavigation = document.getElementById('mobileMenu');
var changeContent = function (event) {
    if (event.target != event.currentTarget) {
        var content = document.getElementById('content');
        link = event.target.parentNode.attributes["data-link"].value;
        url = link + '.html'
        var xhr= new XMLHttpRequest();
        xhr.open('GET', '/RosslareRangers/pages/' + url, true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;
            content.innerHTML= this.responseText;
            history.pushState(link, null, url);
            $('main').scrollTop(0);
            if (link === 'clubinfo'){
                initMap();
            }
            // if (newContentPath === 'gallery'){
            //     gridify();
            // }
        };
        xhr.send();
    }
}

leftNavigation.addEventListener('click', changeContent, false);
rightNavigation.addEventListener('click', changeContent, false);
mobileNavigation.addEventListener('click', function(event) {
    changeContent(event);
    toggleMobileClasses();
    Menu.activateMenu();
}, false);
window.addEventListener('popstate', function (e) {
    var content = document.getElementById('content');
    var link = e.state;
    var subpage;
    if (e.state === null) {
        subpage = 'pages/main.html';
    }
    else {
        subpage = 'pages/' + link + '.html';

    }
    var xhr= new XMLHttpRequest();
    xhr.open('GET', '/RosslareRangers/' + subpage, true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        content.innerHTML= this.responseText;
        $('main').scrollTop(0);
        if (link === 'clubinfo'){
            initMap();
        }
    };
    xhr.send();
})


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
