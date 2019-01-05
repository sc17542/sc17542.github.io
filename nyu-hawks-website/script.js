var nonNewsArticleSideNavList = document.getElementsByClassName('non-news-article-side-nav-list');

var newsArticleSideNavList = document.getElementsByClassName('news-article-side-nav-list');


//for updating the non-news article side nav links
for (var i = 0; i < nonNewsArticleSideNavList.length; i++) {
    nonNewsArticleSideNavList[i].innerHTML =
        '<li><a href="news/01-04-19-hawk-sightings.html">Hawk Visits in the Past Week</a></li>' + 
        
        '<li><a href="news/12-27-18-hawk-sightings-last-three-weeks.html">Reported Hawk Visits Within the Last Three Weeks</a></li>' + 
        
        '<li><a href="news/11-28-18-hawk-sightings.html">Reported Hawk Sightings on 11/28/18</a></li>' + 
        
        '<li><a href="news/11-20-18-hawk-sightings.html">Adult Hawks Visit the Nest Multiple Times on 11/20/18</a></li>' + 
        
        '<li><a href="news/11-13-18-hawk-sighting.html">Reported Hawk Sighting on 11/13/18</a></li>' + 
        
        '<li><a href="news/11-12-18-nest-update.html">11/12/18 Nest Update</a></li>' + 
        
        '<li><a href="news/10-29-18-hawk-cam-back-online.html">The Hawk Cam is Back Online</a></li>';
};


//for updating the news article side nav links
for (var j = 0; j < newsArticleSideNavList.length; j++) {
    newsArticleSideNavList[j].innerHTML = 
        '<li><a href="01-04-19-hawk-sightings.html">Hawk Visits in the Past Week</a></li>' + 
        
        '<li><a href="12-27-18-hawk-sightings-last-three-weeks.html">Reported Hawk Visits Within the Last Three Weeks</a></li>' + 
        
        '<li><a href="11-28-18-hawk-sightings.html">Reported Hawk Sightings on 11/28/18</a></li>' + 
        
        '<li><a href="11-20-18-hawk-sightings.html">Adult Hawks Visit the Nest Multiple Times on 11/20/18</a></li>' + 
        
        '<li><a href="11-13-18-hawk-sighting.html">Reported Hawk Sighting on 11/13/18</a></li>' + 
        
        '<li><a href="11-12-18-nest-update.html">11/12/18 Nest Update</a></li>' + 
        
        '<li><a href="10-29-18-hawk-cam-back-online.html">The Hawk Cam is Back Online</a></li>';
};

