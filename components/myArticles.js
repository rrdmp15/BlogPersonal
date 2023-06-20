export default{
    show(){
        const navContainer = document.querySelector('.navBtn');
        const ws = new Worker ('./storage/wsMyArticles.js');
        const allArticles = document.querySelector('#allArticles');
        const back = document.querySelector('.back');
        const next = document.querySelector('.next');
        let currentPage;
        let sortBy = document.querySelector('#sortBy');
        let selectOption;

        navContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
              e.preventDefault();
              const category = e.target.textContent.toLowerCase();
              currentPage = 1;
              
              ws.postMessage({message: 'category', data: category});
            }
        })

        back.addEventListener('click', ()=>{
            (currentPage > 1) ? currentPage-- : currentPage = 1;
            ws.postMessage({message: 'page', data: currentPage});
        })

        next.addEventListener('click', ()=>{
            currentPage++;
            ws.postMessage({message: 'page', data: currentPage});
        })

        sortBy.addEventListener('change', (e)=>{
            selectOption = e.target.value;
            ws.postMessage({message: 'sortBy', data: selectOption});
        })

        ws.onmessage = (e)=>{
            let {message,data} = e.data;

            if(message == 'articles'){
                allArticles.innerHTML = data;
            }
        }
        
    }
}