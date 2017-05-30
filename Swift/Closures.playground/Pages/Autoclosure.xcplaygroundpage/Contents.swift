//: [Escaping closure](@previous)

struct Test {
    init() {
        print("Test initialized")
    }
}

func testFunc(isEnabled: Bool, closure: @autoclosure () -> Test) {
    if isEnabled {
        closure()
    }
}

testFunc(isEnabled: true, closure: Test())
testFunc(isEnabled: false, closure: Test())

/*: ###
 Important: autoclosure doesn't take arguments because there's no way to pass them
 */