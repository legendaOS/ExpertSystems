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

    while(true){
        if(SOW.find(item => item == end)){
            return true
        }
        

        let newMarked = markOutRules(SOW, modules)

        let newNodes = findOutNodes(newMarked)

        let newConfirmedNodes = []

        for(let oneNoda of newNodes){
            if(confirmNoda(oneNoda, modules, nodes)){
                if(! newConfirmedNodes.includes(oneNoda)){
                    newConfirmedNodes.push(oneNoda)
                }
            }
        }

        let newSOW = [...SOW]
        for(let i of newConfirmedNodes){
            if (! newSOW.includes(i)) newSOW.push(i)
        }

        if(SOW.length == newSOW.length){
            return false
        }

        SOW = newSOW

        let chekpoint = 1

    }

}

export default find