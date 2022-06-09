// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis","Garfield")
})

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    return cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift()
}

function appendCat(name) {
    let newList = [...cats]
    newList.push(name)

    return newList
}

function prependCat(name) {
    let newList = [...cats];
    newList.unshift(name);

    return newList;

}

function removeLastCat(name) {
    let newList = [...cats]
    newList.pop(name)

    return newList
}

function removeFirstCat(name) {
    let newList = [...cats];
    newList.shift(name);

    return newList;
}