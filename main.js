var navigation = document.getElementById('topMenu');
var changeContent = function (event) {
    var content = document.getElementById('content');
    newContentPath = event.srcElement.innerText.toLowerCase();
    // console.log(newContentPath);
    // content.innerHTML = newContentPath + '.html';
    var xhr= new XMLHttpRequest();
    xhr.open('GET', newContentPath + '.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        content.innerHTML= this.responseText;
    };
    xhr.send();
}

navigation.addEventListener('click', changeContent, false);
