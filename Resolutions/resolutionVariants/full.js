import Disjunction from "../Disjunction.js";

import createResolventa from "../createResolventa.js";

/**
 * 
 * @param axioms массив аксиом 
 * @param targetInverted инвертированная цель 
 * @param maxIterations 
 * @returns структура со статусом и результатом
 */

function fullResolution(axioms, targetInverted, maxIterations){

    let DisjunctionStack = [...axioms, targetInverted]

    let iter = 0


    for(let i1 = 0; i1 < DisjunctionStack.length - 1; i1++){

        for(let i2 = 0; i2 < DisjunctionStack.length; i2++){

            // проходим по всем парам дизъюнктов

            if(i1 == i2) continue

            iter++

            if(iter > maxIterations) return {result: false, resStatus: 'выход по числу итенраций'}

            let dis1 = DisjunctionStack[i1]
            let dis2 = DisjunctionStack[i2]

            // пытаемся найти резольвенту

            let resolventa = createResolventa(dis1, dis2)

            if(resolventa instanceof Disjunction){
                DisjunctionStack.push(resolventa)
                // если получилось, то добавляем ее в стэк
            }
            if(resolventa == false){
                return {result: true, resStatus: 'доказано, найден ложный дизъюнкт'}
                // если нашли пустой дизъюнкт - то доказали утверждение
            }

            // если резолв. дизъ. был 1 , то мы его не добавляем

        }

    }

    return {result: false, resStatus: 'не найдено доказательство'}

}

export default fullResolution