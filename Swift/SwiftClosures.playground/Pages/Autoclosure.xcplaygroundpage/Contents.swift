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
