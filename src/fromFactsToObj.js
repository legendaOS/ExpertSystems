function findOutNodes(rules, node){
    let retNodes = []
    let retRules = []
    for(let elem of rules){
        if(elem.from == node){
            retNodes.push(elem.to)
            retRules.push(elem)
        }
    }
    return {retNodes, retRules}
}

function findInModules(rules, node){
    let ret = []
    for(let elem of rules){
        if(elem.to == node){
            ret.push(elem)
        }
    }
    return ret
}

function find(nodes, rules, startRules, endRule){
    let modules = [...rules]
    let currentNodes = [...startRules]

    while(true){
        if(currentNodes.includes(endRule)) {
            return true
        }
        if(currentNodes.lenght == 0){
            return false
        }

        let outRules = []
        let outNodes = []

        for(let elem of currentNodes){
            let buf = findOutNodes(modules, elem)
            outRules = [...buf.retRules]
            outNodes = [...buf.retNodes]
        }

        // удаляем дубли 

        outNodes = [...new Set(outNodes)]

        currentNodes = []

        // помечаем все модули

        for(let elem of outRules){
            elem.flag = 1
        }

        // Добавить в список текущих узлов все законченые узлы

        for(let elem of outNodes){
            // найти ноду
            let curNoda = nodes.find((item)=>{
                return item.name == elem
            })
            // если нода это правило
            if(curNoda.type == 'rule'){
                // если все входящие в нее дуги помечены
                // добавить ее в список текущих нод

                if(findInModules(modules, elem).every((item)=>{
                    return item.flag
                })){
                    currentNodes.push(elem)
                }
            }
            else{
                // если это не правило, т.е. узел
                // то добавить его если хотя бы 1 модуль помечен

                if(findInModules(modules, elem).some((item)=>{
                    return item.flag
                })){
                    currentNodes.push(elem)
                }
            }
        }

        
    }
}

export default find