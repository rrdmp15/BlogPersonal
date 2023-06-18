import myHeader from "./components/myHeader.js";
import myFooter from "./components/myFooter.js";
import myBanner from "./components/myBanner.js";
import myArticles from "./components/myArticles.js";


const fechtApi = async () => {
    const response = await fetch("https://newsapi.org/v2/everything?q=sports&searchIn=content&language=es&pageSize=20&apiKey=f19fa1d5f0d243b2a6ff99ccf04fce40");
    const data = await response.json();
    console.log(data); 
}

fechtApi();