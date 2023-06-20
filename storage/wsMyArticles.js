let template;

let fetchArticles = async(category, page) => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=24&page=${page}&apiKey=f19fa1d5f0d243b2a6ff99ccf04fce40`);
    const resul = await res.json();

    let allArticles = [];
    let count = 0;

    for (const i of resul.articles) {
        if(i.title && i.description && i.urlToImage && i.url){
           plantilla = `
            <article class="card">
                <div class="left">
                    <img src="${i.urlToImage}" alt="">
                </div>
                <div class="right">
                    <h3>${i.title}</h3>
                    <p>${i.description}</p>
                    <a href="${i.url}">See More...</a>
                </div>
            </article>
            `

            allArticles.push(plantilla); 

            count++;

            if (count === 24) {
                break; 
            }
        }
        
    } 
        
    

    postMessage({message: 'articles', data: allArticles});
}

let categories = 'general';
let pages = 1;

onmessage = async(e) => {
    let {message, data} = e.data;

    switch(message){
        case 'category':
            categories = data;
            break;
        
        case 'page':
            pages = data;
            break;
    }

}

fetchArticles(categories, pages);
