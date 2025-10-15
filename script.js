let text = "Frontend developer"
text = text.toLowerCase()
let sum = 0
for (let char of text) {
  if ("aeouiy".includes(char)) {
sum += 1
  }
}
console.log(sum)

let word = "шалаш"
let wordtTwo = word.split("").reverse().join("")
console.log(wordtTwo === word)

let text2 = " JavaScript                це круто "
text2 = text2.split(" ").join("")
console.log(text2)

let sentence = "Я вивчаю javascript самостійно"
sentence = sentence.split(" ").reverse().join(" ")
console.log(sentence)

let text3 = "кіт і кіт грають з котом";
let words = text3.split(" ")
for (let i = 0; i < words.length; i++) {
  if (words[i] == "кіт"){
    words[i] = "собака"
  }
}
console.log(words.join(" "))

let text4 = "кіт і кіт грають з котом"
console.log(text4 = text4.split(" ").map(word => word === "кіт" ? "собака" : word).join(" "))

let sentence2 = "я вивчаю javascript і кіт грає"

sentence2 = sentence2.split(" ")
for (let i = 0; i < sentence2.length; i++) {
  if (sentence2[i] == "кіт") {
    sentence2[i] = "собака"
  }
  sentence2[i] = sentence2[i][0].toUpperCase() + sentence2[i].slice(1)
}
sentence2 = sentence2.reverse().join(" ")
console.log(sentence2)

let sentence3 = "я вивчаю javascript і кіт грає"

sentence3 = sentence3
  .split(" ")
  .map(word => {
    word = (word === "кіт" ? "собака" : word)
    return word[0].toUpperCase() + word.slice(1) 
  })
  .reverse()
  .join(" ")

console.log(sentence3)



