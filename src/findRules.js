/**
 * Поиск исходящих непомеченых ребер
 * @param {Array} BZ - База знаний
 * @param verticalFrom - Вершина у которй ищем непомеченые выходящие ребра
 */

function findRules(BZ, verticalFrom){
    let ret = []
    for(let element of BZ){
        if(element.from == verticalFrom && element.flag == 0){
            ret.push(element)
        }
    }

    return ret
}

export default findRules
