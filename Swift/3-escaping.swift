import Foundation

func simplePrint(f: (String) -> (String)) {
    print(f("Hello world"))
}

func escapingClosure(closure: @escaping (String) -> (String)) {
    DispatchQueue.global().async {
        simplePrint(f: closure)     // This code executes asynchronously
    }                               // Removing @escaping provides compilation error
}

escapingClosure { str in
    return str.uppercased()
}

// Default closure type is @noescape


