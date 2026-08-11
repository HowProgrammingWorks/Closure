//: [Simple closure](@previous)

func repeatFunc(num: Int, f: () -> ()) {
    for _ in 1...num {
        f()
    }
}
repeatFunc(num: 5) {
    print("Hello world")
}



var square: (Int) -> (Int) = { x in
    return x * x
}

let myArray = [0,1,2,3,4]
func through(array arr: [Int], f: (Int) -> (Int)) -> [Int] {
    var result: [Int] = []
    for i in arr {
        result.append(f(i))
    }
    return result
}


let result = through(array: myArray) {
    square($0)
}


//: [Escaping closure](@next)


