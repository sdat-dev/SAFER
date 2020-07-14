let requestURL = "data/research.json";
let request = new XMLHttpRequest();
//getting content Element to append grants information
let maincontentContainer = document.getElementsByClassName('main-content')[0];
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    let content = '';
    const webelementsjson = request.response;
    //condition for checking if browser is Internet Explorer
    let webelements =  ((false || !!document.documentMode))? JSON.parse(webelementsjson): webelementsjson;
    webelements.forEach(element => {
        if(element.type == 'p')
        {
            content += '<p>' + element.content + '</p>';
        }
        else if(element.type == 'img')
        {
            content += '<img src="assets/images/'+ element.content + '" alt="" style="width: 40%; float:right">';
        }
        else if(element.type == 'ul')
        { 
            content += '<ul class="sub-list ' + element.content +'">';
        }
        else if(element.type == 'li')
        {
            content += '<li>'+ element.content +'</li>';
        }
        else if(element.type == '/ul')
        {
            content += '</ul>';
        }
    });

    let contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.innerHTML = content.trim();
    maincontentContainer.appendChild(contentElement);
}