import Disjunction from "../Disjunction.js";

import createResolventa from "../createResolventa.js";

/**
 * 
 * @param axioms массив аксиом 
 * @param targetInverted инвертированная цель 
 * @param maxIterations 
 * @returns структура со статусом и результатом
 */

function basic(axioms, targetInverted, maxIterations){

    let S1 = [...axioms]
    let S2 = [targetInverted]

    let iter = 0


    while(true){
        
        let newDis = []

        for(let dis2 of S2){

            for(let dis1 of S1){
                
                // та же логика что и в полном переборе, только добаляем не в общий стэк а в s2 

                iter++

                if(iter > maxIterations){
                    return {result: false, resStatus: 'выход по числу итераций'}
                }

                let resolv = createResolventa(dis1, dis2)

                if(resolv instanceof Disjunction){
                    newDis.push(resolv)
                }
                if(resolv == false){
                    return {result: true, resStatus: 'доказано, найден ложный дизъюнкт'}
                }

            }

        }

        if(newDis.length == 0){
            return {result: false, resStatus: 'новых не добавилось'}
        }

        S2 = [...S2, ...newDis]

    }

}

export default basic