var hiThere: () -> (String) = {
    return "Hi there!"
}
hiThere() // Hi there!


var square: (Int) -> (Int) = { x in
    return x * x
}

square(10) // 100

var newSquare = square

newSquare(5) // 25
