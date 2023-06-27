class Processor{
    static Processor(data){
        let filtered = data.split("\r\n"); // representação da quebra de linha "\n" e "\r"
        let array_filtered = [];
        filtered.forEach(element => {
            let array = element.split(",");
            array_filtered.push(array);
        });
        
        return array_filtered;
    }
}


module.exports = Processor;