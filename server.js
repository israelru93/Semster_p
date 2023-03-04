

  //  יצירות חיבור לשרת 
  const httpServer = require('http').Server;
  const fs = require('fs');
  class WebServer extends httpServer {
   constructor() {
   super();
   this.listen(5050);
   this.on('request', this.requestHandler);
   }
   requestHandler(request, response) {
   const src = fs.createReadStream("./st"); 
   src.pipe(response);
   }
  }

  exports.module = new WebServer();