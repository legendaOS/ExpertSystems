function reverse(rules){
    for(let element of rules){
        let f = element.from
        let t = element.to

        element.from = t
        element.to = f
    }
}

export default reverse