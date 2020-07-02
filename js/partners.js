let requestURL = "data/partners.json";
let request = new XMLHttpRequest();
//getting content Element to append grants information
let maincontentContainer = document.getElementsByClassName('main-content')[0];
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    let content = '<div class="display-flex">';
    const partnersjson = request.response;
    //condition for checking if browser is Internet Explorer
    let partners =  ((false || !!document.documentMode))? JSON.parse(partnersjson): partnersjson;
    partners.forEach(partner => {
        content += '<div class="col-md-3 col-sm-3 col-xs-12 partner-info pl-0 pr-4">' +
                        '<div class="img-box">'+
                            '<img src="assets/images/partners/'+ partner.image +'"typeof="Image" class="img-fluid">'+
                        '</div>'+
                    '</div>';
    });

    let contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.innerHTML = content.trim();
    maincontentContainer.appendChild(contentElement);
}