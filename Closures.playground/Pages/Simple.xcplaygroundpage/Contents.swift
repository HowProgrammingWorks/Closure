//: [Closure as function parameter](@next)


var hiThere: () -> (String) = {
    return "Hi there!"
}
hiThere() // Hi there!


var square: (Int) -> (Int) = { x in
    return x * x
}

square(10)

var newSquare = square

newSquare(5)
