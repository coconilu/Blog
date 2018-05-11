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