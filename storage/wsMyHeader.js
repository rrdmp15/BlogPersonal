// Declaration of the 'template' variable
let template;

// Asynchronous function for fetching the banner
const fetchBanner = async () => {
  // Array containing the categories
  let category = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  // Array to store articles by category
  let articlesByCategory = [];

  // Looping over each category
  for (const i of category) {
    // Fetching the top headlines for the current category from the news API
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${i}&apiKey=f19fa1d5f0d243b2a6ff99ccf04fce40`);
    // Parsing the response as JSON
    const resul = await res.json();

    // Extracting the first article from the response
    let firstArticle = resul.articles[0];

    // Creating an HTML template with the article information
    template = `
      <li>
        <img src="${firstArticle.urlToImage}" alt="">
        <div>
          <h2>${firstArticle.title}</h2>
          <p>${firstArticle.description}</p>
          <a href="${firstArticle.url}" target="_blank">Read More</a>
        </div>
      </li>
    `;

    // Adding the template to the 'articlesByCategory' array
    articlesByCategory.push(template);
  }

  // Sending a message to the main thread with the banner data
  postMessage({ message: 'banner', data: articlesByCategory });
};

// Calling the fetchBanner function
fetchBanner();
