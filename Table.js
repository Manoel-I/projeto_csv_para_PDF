class Table{
    constructor(array){
        this.header = array[0];
        array.shift();
        this.rows = array;
    }

    get RowsCount(){
        return this.rows.length;
    }

    get ColumCount(){
        return this.header.length;
    }
}



module.exports = Table;