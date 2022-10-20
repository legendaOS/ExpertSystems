function find(rules, nodes, start, end){
    let modules = [...rules]

    let verticals = [start]

    let confirmed = []

    while(true){
        

        if(confirmed.length == end.length){
            return true
        }

        console.log(confirmed)

        // пройтись по детям вершин

        let childs = []

        for(let ver of verticals){
            for(let rule of rules){
                if(rule.from == ver){
                    if(! childs.includes(rule.to)){
                        childs.push(rule.to)
                    }
                }
            }
        }

        console.log(childs)

        // обновить список вершин и проверить есть ли в нем конечные

        verticals = childs

        let lol = verticals.filter(item => end.includes(item))

        for(let c of lol){
            if(!confirmed.includes(c)){
                confirmed.push(c)
            }
        }


        if(verticals.length == 0){
            return false
            // больше нечего разбирать
        }
        
        console.log('-------------------------------')


    }
}

export default find