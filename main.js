
// import {nodes, rules} from './testRules/rulesForTest2.js'


// import find from './AndOrGraph/toNoda.js'

// import find from './AndOrGraph/fromNoda.js'

// import reverse from './AndOrGraph/reverseRules.js'

// reverse(rules)

// let k = find(rules, nodes, [5,6,7,3 , 12], 30)

// let p = find(rules, nodes, 110, [10, 4, 6])

// console.log('all')


// import Athom from "./Resolutions/Athom.js";
// import Disjunction from "./Resolutions/Disjunction.js";

// import { absorption } from "./Resolutions/createResolventa.js";

// import createResolventa from './Resolutions/createResolventa.js'

// let a = new Athom('A', true)
// let b = new Athom('B', true)
// let c = new Athom('C', true)
// let na = new Athom('A', false)
// let nb = new Athom('B', false)
// let nc = new Athom('C', false)
// let d = new Athom('D', true)
// let nd = new Athom('D', false)

// let ax1 = new Disjunction([a, b])
// let ax2 = new Disjunction([na, c])
// let ax3 = new Disjunction([nb, d])
// let ax4 = new Disjunction([nc])
// let ax5 = new Disjunction([nd])
// let ax6 = new Disjunction([na])

// import resolution from './Resolutions/resolution.js'

// let r = resolution([ax1, ax2, ax3, ax4, ax5], ax6, 'full', 1000)
// console.log('all')

// import literal from './Predicats/classes/literal'
// import vertical from './Predicats/classes/vertical.js'
// import rule from './Predicats/classes/rule.js'

// import unification from './Predicats/functions/unification/js'

// let l = new vertical('P', [new literal('a', 'val')])
// let r = new vertical('P', [new literal('K', 'const')])

// let p = unification(l, r)

// let SZW = []