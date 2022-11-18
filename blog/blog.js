import '../styles/tailwind.css'
import '../styles/style.styl'



async function getArticles() {
    let articles = [];
    const urlParams = new URLSearchParams(window.location.search);
    const queryTag = urlParams.get('tag');
    if (queryTag) {
        console.log('ici');
        const response = await fetch(`https://blog.vision-data.io/items/articles_vision?fields=id,title,thumbnail,introduction,tags.tags_id.*&filter[tags][tags_id][id][_eq]=${queryTag}`, {
            method: 'GET'
        });
        const data = await response.json();
        articles = data.data;
        console.log(articles);
    } else {
        console.log('normal');
        const response = await fetch(`https://blog.vision-data.io/items/articles_vision?fields=id,title,thumbnail,introduction`, {
            method: 'GET'
        });
        const data = await response.json();
        articles = data.data;
        
    }
    return articles;
}


function createArticle(article) {
    const articleElement = document.createElement('li');
    articleElement.classList.add('news-item');
    articleElement.innerHTML = `
    <a href="/article/index.html?id=${article.id}" class="news-link">
        <div class="news-article">
            <div class="news-image"><img src="https://blog.vision-data.io/assets/${article.thumbnail}" alt=""/></div>
            <div class="news-infos">
                <h2 class="news-title">${article.title}</h2>
                <p class="news-hook">${article.introduction}</p>
            </div>
        </div>
    </a>
    `;
    return articleElement;
}


const articles = await getArticles();
const articlesContainer = document.querySelector('#news-container');
articles.forEach(article => {
    const articleElement = createArticle(article);
    articlesContainer.appendChild(articleElement);
});
