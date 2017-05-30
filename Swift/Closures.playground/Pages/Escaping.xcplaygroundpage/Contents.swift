//: [Closure as function parameter](@previous)

import Foundation

func simplePrint(f: (String) -> (String)) {
    print(f("Hello world"))
}

/*: ###
 Code inside DispatchQueue.global() executes asynchronously,
 removing @escaping provides compilation error
 */
func escapingClosure(closure: @escaping (String) -> (String)) {
    DispatchQueue.global().async {
        simplePrint(f: closure)
    }
}

/*: ###
We run escapingClosure() func, which will asynchronously execute simplePrint() and pass closure as parameter
 */

escapingClosure { str in
    str.uppercased()
}

/*: ### Default closure type is @noescape */

//: [Autoclosure](@next)
