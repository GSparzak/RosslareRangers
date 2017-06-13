/* PAGES AJAX LOAD */

var leftNavigation = document.getElementById('leftMenu');
var rightNavigation = document.getElementById('rightMenu');
var changeContent = function (event) {
    var content = document.getElementById('content');
    newContentPath = event.srcElement.attributes[0].value;
    var xhr= new XMLHttpRequest();
    xhr.open('GET', '/pages/' + newContentPath + '.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        content.innerHTML= this.responseText;
        content.scrollTop = 0;                          //TODO - not working
        if (newContentPath === 'clubinfo'){
            initMap();
        }
    };
    xhr.send();
}

leftNavigation.addEventListener('click', changeContent, false);
rightNavigation.addEventListener('click', changeContent, false);


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

$(window).load(function() {
     var options =
     {
          srcNode: 'img',             // grid items (class, node)
          margin: '20px',             // margin in pixel, default: 0px
          width: '250px',             // grid item width in pixel, default: 220px
          max_width: '',              // dynamic gird item width if specified, (pixel)
          resizable: true,            // re-layout if window resize
          transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
     }
     $('.grid').gridify(options);
});
