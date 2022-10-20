import Disjunction from "./Disjunction.js"
import Athom from "./Athom.js"

/**
 *
 * @param {Disjunction} dis - дизъюнкт из которого удаляем дубли
 * @return {Disjunction} - дизъюнкт или false \ true
 */
function absorption(dis){
    let arr = []

    for(let at of dis.Athoms){

        // провереям есть ли такой же атом
        let flag = true

        for(let inat of arr){
            if(inat.name == at.name){
                if(inat.sign == at.sign){
                    // если знаки и мена совпали не добавляем этот атом в результат
                    flag = false
                }
                else{
                    // если имена совпали а знаки разные значит он просто 1
                    return true
                }
            }
        }

        if (flag){
            // если его надо добавить то добавляем атом
            arr.push(at)
        }

    }

    return new Disjunction(arr)

}

export {absorption}

/**
 * 
 * @param firstDis - первый дизъюнкт 
 * @param secondDis - второй дизъюнкт 
 * @returns резольвент. дизъюнкт, null - если не найдено контраарной пары или false если был пустой дизъюнкт
 */

function createResolventa(firstDis, secondDis){

    firstDis = absorption(firstDis)
    secondDis = absorption(secondDis)

    let firstAt = [ ... firstDis.Athoms ]
    let secondAt = [... secondDis.Athoms]

    if(firstDis && secondDis){
        // если обе не 0

        let bufAthom // Атом из первого списка для которого ищем противоположный по знаку
        let flag = false

        // бежим по всем парам атомов и если имена совпали а знаки разные flag <- true

        cikle: for(bufAthom of firstAt){
            for(let inat of secondAt){
                if(bufAthom.name == inat.name){
                    if(bufAthom.sign != inat.sign){
                        flag = true
                        break cikle
                    }
                }
            }
        }

        if(flag){
            // если найдена противополажная пара атомов

            // заполнить список остальных атомов не включая в него найденные противоположности

            let leftAt = firstAt.filter(item => item.name != bufAthom.name)
            let rightAt = secondAt.filter(item => item.name != bufAthom.name)

            let retAthoms = [...leftAt , ...rightAt]

            let r = absorption( new Disjunction(retAthoms) )

            if(r.Athoms.length) return r
            else return false


        }
        else{
            // противоположных пар не найдено
            // вернуть null

            return null
        }

    }
    else{
        //  если кто-то 0
        return false
    }

}

export default createResolventa