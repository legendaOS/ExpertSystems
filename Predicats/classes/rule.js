class rule{
    constructor(name, listOfVerticals, result){
        this.name = name
        this.listOfVerticals = listOfVerticals
        this.result = result
    }

    toString(){
        let vbs = ''
        this.listOfVerticals.forEach(element => {
            vbs += element.toString() + ' '
        });
        return `${vbs} : ${this.name} : ${this.result.toString()}`
    }
}

export default rule