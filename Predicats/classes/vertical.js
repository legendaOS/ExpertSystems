class vertical{
    constructor (name, listOfLiter){
        this.name = name
        this.listOfLiter = listOfLiter
        // list Of Literals is array of instances literal obj
    }

    toString(){
        let bs = ''
        this.listOfLiter.forEach(element => {
            bs += element.name + ','
        });
        if(bs.slice(-1) == ','){
            bs = bs.slice(0, -1)
        }
        let nbs = `${this.name}(${bs})`

        return nbs
    }
}

export default vertical