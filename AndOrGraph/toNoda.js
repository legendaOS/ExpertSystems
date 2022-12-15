function markOutRules(nodes, modules){
    let res = []
    
    for(let oneNoda of nodes){
        for(let oneRule of modules){
            if(oneRule.from == oneNoda && oneRule.flag == 0){
                res.push(oneRule)
                oneRule.flag = 1
            }
        }
    }

    return res
}

export {markOutRules}

function getInRules(noda, modules){
    let res = []

    for(let oneRule of modules){
        if(oneRule.to == noda){
            res.push(oneRule)
        }
    }

    return res
}

export {getInRules}

function confirmNoda(noda, modules, types){
    let inRules = getInRules(noda, modules)

    let nodeWithType = types.find(item => item.name == noda)

    if(nodeWithType.type == 'rule'){
        // если это правило
        return inRules.every(item=>item.flag == 1)
    }
    else{
        // если это нода
        return inRules.some(item=>item.flag == 1)
    }
}

export {confirmNoda}

function findOutNodes(rules){
    let res = []
    for(let oneRule of rules){
        res.push(oneRule.to)
    }
    return res
}


function find(rules, nodes, start, end){
    let modules = [...rules]
    let SOW = [...start]

    let confirmedRules = []

    while(true){
        if(SOW.find(item => item == end)){
            // если в подтвержденных вершинах найдена конечная
            return {statusRes: true, rules: confirmedRules}
        }
        
        // пометить ве выходящие дуги
        let newMarked = markOutRules(SOW, modules)

        // найти концы этих дуг
        let newNodes = findOutNodes(newMarked)

        //подтвердить вершины из этого массива

        let newConfirmedNodes = []

        for(let oneNoda of newNodes){
            if(confirmNoda(oneNoda, modules, nodes)){
                if(! newConfirmedNodes.includes(oneNoda)){
                    newConfirmedNodes.push(oneNoda)
                }
            }
        }

        // подтвержденные вершины довавить в массив вершин

        let newSOW = [...SOW]
        for(let i of newConfirmedNodes){
            if (! newSOW.includes(i)) newSOW.push(i)
        }

        // если ничего не изменилось то завершиться
        if(SOW.length == newSOW.length){
            return false
        }

        SOW = newSOW

        // добавить вершины типа "правило" в массив пройденных правил

        for(let elementa of SOW){
            let bufnoda = nodes.find(item => item.name == elementa)
            if(bufnoda.type == 'rule'){
                if(! confirmedRules.includes(elementa)){
                    confirmedRules.push(elementa)
                }
            }
        }

        let chekpoint = 1

    }

}

export default find