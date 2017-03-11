var navigation = document.getElementById('topMenu');
var changeContent = function (event) {
    var content = document.getElementById('content');
    newContentPath = event.srcElement.attributes[0].value;
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
    };
    xhr.send();
}

navigation.addEventListener('click', changeContent, false);

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
