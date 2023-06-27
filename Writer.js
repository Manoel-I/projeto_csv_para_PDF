let util = require('util');
let fs = require('fs');


class Write{
    constructor(){
        this.write = util.promisify(fs.writeFile);
    }


    async Write(fileName, data){
        try{
            await this.write(fileName, data);
            return true;
        }catch(error){
            console.log(error);
            return false;
        }
    }
}


module.exports = Write;