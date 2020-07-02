let requestURL = "data/team.json";
let request = new XMLHttpRequest();
//getting content Element to append grants information
let maincontentContainer = document.getElementsByClassName('main-content')[0];
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    let content = '';
    const teamjson = request.response;
    //condition for checking if browser is Internet Explorer
    let team =  ((false || !!document.documentMode))? JSON.parse(teamjson): teamjson;
    team.forEach(member => {
        content += '<div class = "team-member">';
        if(member.photo != ''){
            content += '<img class = "member-image" src = "assets/images/team/'+ member.photo+'">';
        } 
        content += '<h2 class = "content-header-no-margin">';
        if(member.profile != '')
        {
            content += '<a class = "no-link-decoration" href = ' + member.profile + '>' + member.firstname + ' '+ member.lastname  + '</a>';
        }
        else
        {
            content += member.firstname + ' '+ member.lastname  + '</h2>';
        }
        content += '<h5 class = "content-header-no-margin member-title">'+ member.title + ',<br>'+member.organization;
        if(member.department != '')
        {
            content += ', '+ member.department;
        }  
        content += '</h5><p class = "member-description">';
        if(member.email != '')
        {
            content += '<strong>Email: </strong> <a class = "email-link" href = mailto:' + member.email + 
            '>'+ member.email+ '</a>';
        }
        if(member.phone != '')
        {
            content += '<br><strong>Phone: </strong>'+ member.phone; 
        }
        if(member.interest != '')
        {
            content += '<br><strong>Research Interests: </strong>'+ member.interest;
        }
        content += '</p></div>';
    });

    let contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.innerHTML = content.trim();
    maincontentContainer.appendChild(contentElement);
}
    