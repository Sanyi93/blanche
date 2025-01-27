var xhr = new XMLHttpRequest();

var url = './health_article.json';

//GET Method in order to fetch data asynchronously(true)
xhr.open('GET', url, true);
//expected reponsetype in json format
xhr.responseType = 'json';

//defining function in order to define what shall happen when data is successfully loaded
xhr.onload = function(){
    //retrieving articles array from JSON response
    var articles = xhr.response.articles;
    //defining the html element where the articles shall be displayed
    var articlesDiv = document.getElementById('articles');
};

    //iterating over the articles, using foreach()
    //Create HTML elements dynamically for example, <div>, <h2>, <p>, <h3>, <ul>, <li> for each article's title, description,ways_to_achieve,
    //and benefits using createElement DOM method as follows:
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
        
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
        articlesDiv.appendChild(articleDiv);

        xhr.send();
    });

