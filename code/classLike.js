let person = {
    name: 'Bar'
}

let handler = {
    get: function (target, name) {
        if (name === 'getName') {
            return () => target['name']
        }
    }
}

let p = new Proxy(person, handler)

console.log(p.getName())

// 验证extend的原理
class Father {
    constructor() {
        this.fatherSelf = function () { }
    }

    fatherPrototype() { }
}

class Child extends Father {
    constructor() {
        super()
        this.childSelf = function () { }
    }

    childPrototype() { }
}

var c = new Child()