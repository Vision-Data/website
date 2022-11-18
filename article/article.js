import '../styles/tailwind.css'
import '../styles/style.styl'



async function getData() {
    let article = [];
    
    //get query params id
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const response = await fetch(`https://blog.vision-data.io/items/articles_vision/${id}?fields=title,thumbnail,introduction,content,date_created,date_updated,tags_vision.tags_id.name,sources_vision.sources_id.*`, {
        method: 'GET'
    });
    const data = await response.json();
    article = data.data;
    return article;
}


const article = await getData();
console.log(article);
const articleDate = new Date(article.date_updated).toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'});

document.querySelector('.article-title').innerHTML = article.title;
document.querySelector('.article-thumbnail-img').src = "https://blog.vision-data.io/assets/" + article.thumbnail;
document.querySelector('.article-accroche').innerHTML = article.introduction;
document.querySelector('.article-content').innerHTML = article.content;
document.querySelector('.article-date').innerHTML = articleDate;

if (article.tags_vision) document.querySelector('.article-tags').innerHTML = article.tags_vision.tags_id.name;
if (article.sources_vision) document.querySelector('.article-sources').innerHTML = article.sources_vision.sources_id.name;
