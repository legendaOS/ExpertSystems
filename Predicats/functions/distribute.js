function distribute(rule, listOfReplace){
    let retStat = {exist: false, listOfDistribute: []}

    for(let oneVertical of rule.listOfVerticals){
        // for all verticals in rule
        for(let oneLiter of oneVertical.listOfLiter){
            // for all liters in vertical
            // if liter is in listOfReplace 
            // replace it 

            let found = listOfReplace.find(item => item.from == oneLiter.name)
            if(found){
                oneLiter.name = found.to
                oneLiter.type = found.type

                retStat.exist = true
                retStat.listOfDistribute.push(oneLiter)
            }            
            
        }
    }

    return retStat
}
export default distribute