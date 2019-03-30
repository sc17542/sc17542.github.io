var nonNewsArticleSideNavList = document.getElementsByClassName('non-news-article-side-nav-list');

var newsArticleSideNavList = document.getElementsByClassName('news-article-side-nav-list');


//for updating the non-news article side nav links
for (var i = 0; i < nonNewsArticleSideNavList.length; i++) {
    nonNewsArticleSideNavList[i].innerHTML =
        '<li><a href="news/2019/03-29-19-events-at-the-nest-3-24-3-30.html">Events at the Nest (3/24/19 - 3/30/19)</a></li>' +
        
        '<li><a href="news/2019/03-22-19-third-egg-of-2019.html">Third Egg of 2019!</a></li>' +
        
        '<li><a href="news/2019/03-19-19-second-egg-of-2019.html">Second Egg of 2019!</a></li>' +
        
        '<li><a href="news/2019/03-18-19-events-at-the-nest-3-17-3-23.html">Events at the Nest (3/17/19 - 3/23/19)</a></li>' +
        
        '<li><a href="news/2019/03-15-19-events-at-the-nest-3-15-3-16.html">Events at the Nest (3/15/19 - 3/16/19)</a></li>' +
        
        '<li><a href="news/2019/03-15-19-first-egg-of-2019.html">First Egg of 2019!</a></li>' +
        
        '<li><a href="news/2019/03-12-19-march-hawk-sightings.html">Hawk Visits in March 2019</a></li>';
};


//for updating the news article side nav links
for (var j = 0; j < newsArticleSideNavList.length; j++) {
    newsArticleSideNavList[j].innerHTML = 
        '<li><a href="../2019/03-29-19-events-at-the-nest-3-24-3-30.html">Events at the Nest (3/24/19 - 3/30/19)</a></li>' +
        
        '<li><a href="../2019/03-22-19-third-egg-of-2019.html">Third Egg of 2019!</a></li>' +
        
        '<li><a href="../2019/03-19-19-second-egg-of-2019.html">Second Egg of 2019!</a></li>' +
        
        '<li><a href="../2019/03-18-19-events-at-the-nest-3-17-3-23.html">Events at the Nest (3/17/19 - 3/23/19)</a></li>' +
        
        '<li><a href="../2019/03-15-19-events-at-the-nest-3-15-3-16.html">Events at the Nest (3/15/19 - 3/16/19)</a></li>' +
        
        '<li><a href="../2019/03-15-19-first-egg-of-2019.html">First Egg of 2019!</a></li>' +
        
        '<li><a href="../2019/03-12-19-march-hawk-sightings.html">Hawk Visits in March 2019</a></li>';
};

