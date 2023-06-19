export default{
    show(){
        const navContainer = document.querySelector('.navBtn');
        const ws = new Worker ('./storage/wsMyArticles.js');
        const allArticles = document.querySelector('#allArticles');

        navContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
              e.preventDefault();
              const category = e.target.textContent.toLowerCase();
              
              ws.postMessage({message: 'category', data: category});
            }
        })

        ws.onmessage = (e)=>{
            let {message,data} = e.data;

            if(message == 'articles'){
                allArticles.innerHTML = data;
            }
        }
        
    }
}