var nonNewsArticleSideNavList = document.getElementsByClassName('non-news-article-side-nav-list');

var newsArticleSideNavList = document.getElementsByClassName('news-article-side-nav-list');


//for updating the non-news article side nav links
for (var i = 0; i < nonNewsArticleSideNavList.length; i++) {
    nonNewsArticleSideNavList[i].innerHTML =
        '<li><a href="news/2019/03-12-19-march-hawk-sightings.html">Hawk Visits in March 2019</a></li>' +
        
        '<li><a href="news/2019/02-05-19-february-hawk-sightings.html">Hawk Visits in February 2019</a></li>' +
        
        '<li><a href="news/2019/01-25-19-january-hawk-sightings.html">Hawk Visits in January 2019</a></li>' + 
        
        '<li><a href="news/2019/01-05-19-hawk-sightings.html">Hawk Visits on 1/5/19</a></li>' + 
        
        '<li><a href="news/2019/01-04-19-hawk-sightings.html">Hawk Visits in the Past Week</a></li>' + 
        
        '<li><a href="news/2018/12-27-18-hawk-sightings-last-three-weeks.html">Reported Hawk Visits Within the Last Three Weeks</a></li>' + 
        
        '<li><a href="news/2018/11-28-18-hawk-sightings.html">Reported Hawk Sightings on 11/28/18</a></li>';
};


//for updating the news article side nav links
for (var j = 0; j < newsArticleSideNavList.length; j++) {
    newsArticleSideNavList[j].innerHTML = 
        '<li><a href="../2019/03-12-19-march-hawk-sightings.html">Hawk Visits in March 2019</a></li>' +
        
        '<li><a href="../2019/02-05-19-february-hawk-sightings.html">Hawk Visits in February 2019</a></li>' +
        
        '<li><a href="../2019/01-25-19-january-hawk-sightings.html">Hawk Visits in January 2019</a></li>' + 
        
        '<li><a href="../2019/01-05-19-hawk-sightings.html">Hawk Visits on 1/5/19</a></li>' + 
        
        '<li><a href="../2019/01-04-19-hawk-sightings.html">Hawk Visits in the Past Week</a></li>' + 
        
        '<li><a href="../2018/12-27-18-hawk-sightings-last-three-weeks.html">Reported Hawk Visits Within the Last Three Weeks</a></li>' + 
        
        '<li><a href="../2018/11-28-18-hawk-sightings.html">Reported Hawk Sightings on 11/28/18</a></li>';
};

