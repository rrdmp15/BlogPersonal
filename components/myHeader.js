// Importing the module as a default export
export default {
    // Defining the 'show' method
    show() {
      // Creating a new Worker instance with the specified file
      let ws = new Worker('./storage/wsMyHeader.js');
      // Selecting the 'ul' element within the header's banner
      let banner = document.querySelector('body > header > .banner > ul');
  
      // Event handler for receiving messages from the worker
      ws.onmessage = (e) => {
        // Destructuring the 'message' and 'data' properties from the received data
        let { message, data } = e.data;
  
        // Checking if the message is 'banner'
        if (message === 'banner') {
          // Inserting the data as HTML at the end of the 'banner' element
          for (const i of data) {
            banner.insertAdjacentHTML('beforeend', i);
          }
        }
      };
    },
  };
  