import '../styles/tailwind.css'
import '../styles/style.styl'



async function getArticles() {
    let articles = [];
    const response = await fetch(`https://blog.vision-data.io/items/articles_vision?fields=id,title,thumbnail,introduction`, {
        method: 'GET'
    });
    const data = await response.json();
    articles = data.data;
    return articles;
}


function createArticle(article) {
    const articleElement = document.createElement('li');
    articleElement.classList.add('news-item');
    articleElement.innerHTML = `
    <a href="${article.id}" class="news-link">
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


console.log(await getArticles());

const articles = await getArticles();
const articlesContainer = document.querySelector('#news-container');
articles.forEach(article => {
    const articleElement = createArticle(article);
    console.log(articleElement);
    articlesContainer.appendChild(articleElement);
});
