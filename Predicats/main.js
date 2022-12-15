import literal from './classes/literal.js'
import vertical from './classes/vertical.js'
import rule from './classes/rule.js'

import distribute from './functions/distribute.js'

import unification from './functions/unification.js'





let Ax = new vertical('A', [new literal('x', 'val')])
let Wy = new vertical('W', [new literal('y', 'val')])
let Sxyz = new vertical('S', [new literal('x', 'val'), new literal('y', 'val'), new literal('z', 'val')])
let Hz = new vertical('H', [new literal('z', 'val')])

let CW = new vertical('C', [new literal('W', 'const')])
let Cx = new vertical('C', [new literal('x', 'val')])



let m1 = new rule('m1', [Ax, Wy, Sxyz, Hz], Cx)



console.log('After iteration we have')

console.log(m1.toString())

console.log('Unification')

console.log(`verticals: ${CW.toString()} ${Cx.toString()}`)

let p = unification(CW, Cx)

m1 = new rule('m1', [Ax, Wy, Sxyz, Hz], p.newVertical)

console.log('We have list of Replace')

console.log(p.listOfReplace)

distribute(m1, p.listOfReplace)

console.log('Distribution')

console.log(m1.toString())

let breakpoint

console.log('All')