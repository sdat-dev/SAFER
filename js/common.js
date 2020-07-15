let addsidemenu = function(page){
    let sidemenuItems = [{"item": "HOME", "link": "home.html"},
                         {"item":"ABOUT", "link":"about.html"},
                         {"item":"RESEARCH", "link":"research.html"},
                         {"item":"TEAM", "link":"team.html"},
                         {"item":"PARTNERS", "link":"partners.html"},
                         {"item":"PUBLICATIONS", "link":"publications.html"},
                         {"item":"NEWS AND EVENTS", "link":"#"},
                         {"item":"CONTACT", "link":"contact.html"}]

    let sidemenu = document.getElementById('navigation-bar');

    for(let i = 0; i < sidemenuItems.length; i++){
        let item = sidemenuItems[i];
        let menuItem = document.createElement("li");
        let menuItemContent = '<a href="' + item.link + '">'+ item.item +'</a>'; 
        menuItem.innerHTML = menuItemContent;
        menuItem.classList.add('navigation-items');
        menuItem.classList.add('hover-highlight');
        if(page == item.item)
        {
            menuItem.setAttribute("id", "active-page");
        }
        sidemenu.appendChild(menuItem);
    }
}