// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

const appendCatnondestructive = [...cats, "Broom"]
function appendCat() {
    return appendCatnondestructive;
}
    
const prependCatnondestructive = ["Arnold", ...cats]
function prependCat(){
    return prependCatnondestructive;
}

function removeLastCat(){
    return  cats.slice(0, cats.length -1)  
}

function removeFirstCat() {
   return cats.slice(1)
}