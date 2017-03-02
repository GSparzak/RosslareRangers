var navigation = document.getElementById('topMenu');
var changeContent = function (event) {
    var content = document.getElementById('content');
    newContentPath = event.srcElement.innerText.toLowerCase();
    var xhr= new XMLHttpRequest();
    xhr.open('GET', 'RosslareRangers/pages/' + newContentPath + '.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        content.innerHTML= this.responseText;
    };
    xhr.send();
}

navigation.addEventListener('click', changeContent, false);
