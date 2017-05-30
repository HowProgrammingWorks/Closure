var hiThere: () -> (String) = {
    return "Hi there!"
}
hiThere()


var square: (Int) -> (Int) = { x in
    return x * x
}

/*: ###
 Without explicitly declaring "x", you can use $0 as parameter:
 */
var squareAgain: (Int) -> (Int) = {
    $0 * $0
}
square(10)

var newSquare = square

newSquare(5)

//: [Closure as function parameter](@next)
