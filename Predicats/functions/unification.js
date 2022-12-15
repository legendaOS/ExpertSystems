import vertical from "../classes/vertical.js";
import literal from "../classes/literal.js";




/**
 * 
 * @param {vertical} first 
 * @param {vertical} second 
 */
function unification(first, second){
    let listOfReplace = []
    let newVertical = new vertical(first.name, [])

    if(first.name == second.name){
        if(first.listOfLiter.length == second.listOfLiter.length){
            // solution

            for (let index = 0; index < first.listOfLiter.length; index++) {
                // for of all left - right Literals

                let leftLiteral = first.listOfLiter[index]
                let rightLiteral = second.listOfLiter[index]

                if(leftLiteral.type == 'const'){
                    if(rightLiteral.type == 'val'){
                        // X - y  replce y/X
                        listOfReplace.push({from: rightLiteral.name, to: leftLiteral.name, type: leftLiteral.type})
                        newVertical.listOfLiter.push(new literal(leftLiteral.name, leftLiteral.type))
                    }
                    else{
                        return {statusText: 'error', description: '2 const', statusCode: 102}
                    }
                }
                else{
                // leftListerl.type == 'val

                    if(rightLiteral.type == 'val'){
                        // x - y replace y/x

                        listOfReplace.push({from: rightLiteral.name, to:leftLiteral.name, type: leftLiteral.type})
                        newVertical.listOfLiter.push(new literal(leftLiteral.name, leftLiteral.type))
                    }
                    else{
                        // x - Y replace x/Y

                        listOfReplace.push({from: leftLiteral.name, to: rightLiteral.name, type: rightLiteral.type})
                        newVertical.listOfLiter.push(new literal(rightLiteral.name, rightLiteral.type))
                    }

                }
            }
        }
        else{
            return {statusText: 'error', description: 'not same length', statusCode: 101}
        }
    }
    else{
        return {statusText: 'error', description: 'not same names', statusCode: 100}
    }

    // if not errors in returns
    // return newVertical and lilstOfReplace

    return {statusText: 'success', statusCode: 0, description: 'all right', listOfReplace: listOfReplace, newVertical: newVertical}
}

export default unification