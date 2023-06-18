export default{
    show(){
        let ws = new Worker('./storage/wsMyHeader.js');
        let banner = document.querySelector('body > header > .banner > ul');
        

        ws.onmessage = (e)=>{
            let {message, data} = e.data;

            if(message === 'banner'){
                banner.insertAdjacentHTML("beforeend", data);
            }
        }
    }
}