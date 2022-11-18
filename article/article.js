import '../styles/tailwind.css'
import '../styles/style.styl'



async function getData() {
    let article = [];
    
    //get query params id
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const response = await fetch(`https://blog.vision-data.io/items/articles_vision/${id}?fields=title,thumbnail,introduction,content,date_created,date_updated,tags.tags_id.name,sources.sources_id.*`, {
        method: 'GET'
    });
    const data = await response.json();
    article = data.data;
    return article;
}


const article = await getData();
const articleDate = new Date(article.date_updated).toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'});

document.querySelector('.article-title').innerHTML = article.title;
document.querySelector('.article-thumbnail-img').src = "https://blog.vision-data.io/assets/" + article.thumbnail;
document.querySelector('.article-accroche').innerHTML = article.introduction;
document.querySelector('.article-content').innerHTML = article.content;
document.querySelector('.article-date').innerHTML = articleDate;

if (article.tags) {
    const tags = article.tags;
    const tagsName = tags.map(tag => tag.tags_id.name);
    tagsName.forEach(tag => {
        document.querySelector('.article-tags').innerHTML += `<li class="article-tags-item">${tag}</li>`;
    });
}
if (article.sources) {
    const sources = article.sources;
    const sourcesLink = sources.map(source => source.sources_id.link);
    const sourcesName = sources.map(source => source.sources_id.name);

    sourcesLink.forEach((source, index) => {
        document.querySelector('.article-sources').innerHTML += `<li class="article-sources-item"><a href="${source}" class="article-sources-link" target="_blank">${sourcesName[index]}</a></li>`;
    });
}