import findRules from "./findRules.js"

/**
 * Функция поиска в глубину от одной вершины до другой
 * (От цели к вершине)
 * @param {Array} BZ - База знаний
 * @param start - Имя вершины от которой осуществлять поиск 
 * @param {*} end - Имя вершины до которой осуществлять поиск 
 * @return список вершин в пути => если он пустой - пути нет
 */

function depthFirstSearch(BZ, start, end){
    let rules = [...BZ]
    let listOfVerticals = [start]

    while(true){

        // вернет массив вершин в пути, если он пуст - пути нет
        if(listOfVerticals.at(-1) == end || listOfVerticals.length == 0){
            break
        }

        // найти вершины в которые можно прийти из головы списка

        let canGo = findRules(rules, listOfVerticals.at(-1))

        // если куда-то можно пойти - идем и ствим флаг модулю правила в 0
        // иначе удаляем эту вершину из списка

        if(canGo.length){
            canGo[0].flag = 1
            listOfVerticals.push(canGo[0].to)
        }
        else{
            listOfVerticals.pop()
        }
    }

    return listOfVerticals
}

/**
 * Поиск в ширину от вершины к вершине (от цели к вершине)
 * @param {Array} BZ - База знаний
 * @param start - Начальная вершина      
 * @param end - Кенечная вершина 
 * @return {boolean} достижима или нет
 */

function breadthFirstSearch(BZ, start, end){
    let rules = [...BZ]
    let listOfVerticals = [start]

    while(true){
        // если очередь пуста, вернуть ложь

        if (listOfVerticals.length == 0){
            return false
        }

        // если начало очереди это искомая вершина вернуть истину

        if(listOfVerticals[0] == end){
            return true
        }
        
        // Удалить верушку и
        // добавить в конец очереди детей проверенного элемента

        for(let oneRule of findRules(rules, listOfVerticals.shift())){
            listOfVerticals.push(oneRule.to)
        }
    }
}

export {depthFirstSearch, breadthFirstSearch} 