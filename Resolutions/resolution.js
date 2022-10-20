import fullResolution from "./resolutionVariants/full.js"
import basic from "./resolutionVariants/basic.js"
/**
 * 
 * @param axioms массив аксиом 
 * @param targetInverted инвертированная цель 
 * @param resolutionVariant тип обхода - full, basic (полный перебор, опорное мн-во)
 * @param maxIterations
 * @returns структура со статусом и результатом
 */
function resolution(axioms, targetInverted, resolutionVariant, maxIterations){
    if(resolutionVariant == 'full'){
        return fullResolution(axioms, targetInverted, maxIterations)
    }
    if(resolutionVariant == 'basic'){
        return basic(axioms , targetInverted , maxIterations)
    }
}

export default resolution