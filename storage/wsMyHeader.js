let plantilla;


const fechtBanner = async () => {
    let category = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    let articlesByCategory = [];

    for (const i of category) {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${i}&apiKey=f19fa1d5f0d243b2a6ff99ccf04fce40`);
        const resul = await res.json();

        let firtsArticle = resul.articles[0];

        let plantilla = `
        <li>
            <img src="${firtsArticle.urlToImage}" alt="">
            <div>
                <h2>${firtsArticle.title}</h2>
                <p>${firtsArticle.description}</p>
                <a href="${firtsArticle.url}" target="_blank">Read More</a>
            </div>
        </li>
        `

        articlesByCategory.push(plantilla);
    }
    
    postMessage({message: 'banner', data: articlesByCategory});
}

fechtBanner();