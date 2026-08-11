//: [Closure as function parameter](@previous)

import Foundation

struct FunctionStorage {
    
    typealias ClosureType = (Int, Int) -> Int
    
    private(set) var funcList: [ClosureType] = []
    
    mutating func append(aFunction: @escaping ClosureType) {
        funcList.append(aFunction)
    }
    
/*: ### The functions append() accepts and adds to the array a closure declared outside the function. */
    
    mutating func append(functions: @escaping ClosureType...) {
        funcList.append(contentsOf: functions)
    }
    
    func apply(to value: Int,
               and aValue: Int,
               from initial: Int = 0, with action: ClosureType) -> Int {
        
        return funcList.reduce(initial) { (res, fn) -> Int in
            action(res, fn(value, aValue))
        }
    }
}

var storage = FunctionStorage()
storage.append(functions: (*), (+), (-))
storage.apply(to: 4, and: 2, with: (+))


/*: ### Default closure type is @noescape */

//: [Autoclosure](@next)



