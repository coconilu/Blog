function compose() {
    let args = arguments
    let len = args.length
    if (len === 0) {
        return function () { }
    }
    return function () {
        let result = args[0].apply(undefined, arguments)

        for (let i = 1; i < len; ++i) {
            result = args[i].call(undefined, result)
        }

        return result
    }
}

// 测试
function what(n) { return n }

function addTree(n) { return n + 3 }

function multipleFour(n) { return n * 4 }

function minusTwo(n) { return n / 2 }

let com1 = compose(what, addTree, multipleFour)
let com2 = compose(what, multipleFour, minusTwo)

console.log(com1(2)) // 20
console.log(com2(2))// 4