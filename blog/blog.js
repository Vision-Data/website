import '../styles/tailwind.css'
import '../styles/style.styl'

console.log(getArticles());

function getArticles() {
    let articles = [];
    fetch(`https://blog.vision-data.io/items/articles_vision`, {
         method: 'GET'
    }).then(response => response.json())
    .then(data => {
        articles = data.data;
    })
    return articles;
}