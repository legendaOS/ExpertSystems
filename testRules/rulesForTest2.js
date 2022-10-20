let rules = [
    {from: 1, to: 101, flag: 0},
    {from: 2, to: 101, flag: 0},
    {from: 3, to: 102, flag: 0},
    {from: 4, to: 102, flag: 0},
    {from: 4, to: 103, flag: 0},
    {from: 5, to: 103, flag: 0},
    {from: 101, to: 6, flag: 0},
    {from: 102, to: 6, flag: 0},
    {from: 102, to: 7, flag: 0},
    {from: 103, to: 7, flag: 0},
    {from: 6, to: 104, flag: 0},
    {from: 7, to: 104, flag: 0},
    {from: 104, to: 8, flag: 0},
]

let nodes = [
    {name: 1, type: 'node'},
    {name: 2, type: 'node'},
    {name: 3, type: 'node'},
    {name: 4, type: 'node'},
    {name: 5, type: 'node'},
    {name: 6, type: 'node'},
    {name: 7, type: 'node'},
    {name: 8, type: 'node'},
    {name: 9, type: 'node'},

    {name: 101, type: 'rule'},
    {name: 102, type: 'rule'},
    {name: 103, type: 'rule'},
    {name: 104, type: 'rule'},
]



export {nodes, rules}