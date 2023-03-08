import '../styles/tailwind.css'
import '../styles/style.styl'

init();
window.addEventListener('hashchange', () => {
    init();
});

async function getArticles() {
    let articles = [];
    const urlParams = new URLSearchParams(window.location.search);
    const queryTag = urlParams.get('tag');
    if (queryTag) {
        const response = await fetch(`https://blog.vision-data.io/items/articles_vision?fields=id,title,thumbnail,introduction,tags.tags_id.*&filter[tags][tags_id][id][_eq]=${queryTag}`, {
            method: 'GET'
        });
        const data = await response.json();
        articles = data.data;
    } else {
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

async function getTagName(tagId) {
    const response = await fetch(`https://blog.vision-data.io/items/tags/${tagId}`, {
        method: 'GET'
    });
    const data = await response.json();
    return data.data.name;
}

async function init() {
    const articles = await getArticles();
    const articlesContainer = document.querySelector('#news-container');
    
    if (articles.length === 0) {
        articlesContainer.innerHTML = `<p class="news-empty">Aucun article ne correspond à votre recherche</p><div class="article-all">
        <button class="btn btn-second">
            <a href="/blog/index.html" class="article-see-all">Voir tout les articles</a>
        </button>
    </div>`;
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        const queryTag = urlParams.get('tag');
        if (queryTag) {
            const tagName = await getTagName(queryTag);
            articlesContainer.innerHTML += `<p>Recherche pour la catégorie <strong>${tagName}</strong></p>`;
        }
        articles.forEach(article => {
            const articleElement = createArticle(article);
            articlesContainer.appendChild(articleElement);
        });
        if (queryTag) {
            articlesContainer.innerHTML += `
            <div class="article-all">
            <button class="btn btn-second">
                <a href="/blog/index.html" class="article-see-all">Voir tout les articles</a>
            </button>
        </div>`;
        }
    }
}
