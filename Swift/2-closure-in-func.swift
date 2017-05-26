func repeatFunc(num: Int, f: () -> ()) {
    for _ in 1...num {
        f()
    }
}

repeatFunc(num: 5) {
    print("Hello world")
}  //  prints "Hello world" 5 times


let myArray = [0,1,2,3,4]
func through(array arr: [Int], f: (Int) -> (Int)) -> [Int] {
    var result: [Int] = []
    for i in arr {
        result.append(f(i))
    }
    return result
}


through(array: myArray) {
    $0 + $0
}   // [0,2,4,6,8]
