let str = 'The quick brown fox jumped over the lazy dogs'

let numberOfWords = str.split(' ').reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
})
    

console.log(numberOfWords)


let arr = ["short", "medium", "longest", "tiny"];
let sortedArr = arr.sort((a,b) => a.length - b.length);
console.log(sortedArr)
