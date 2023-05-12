// Iteration 1: Names and Input
let hacker1 = "Xavier"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Marcos"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops


//3.1
let a = "";
let b = "";
for (let i = 0; i < hacker1.length; i++) {
    a += hacker1[i] + " "
}
console.log(a.toUpperCase());

//3.2
for (let j = hacker2.length - 1; j >= 0; j--) {
    b += hacker2[j]
}
console.log(b);

//3.3

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
}
else if(hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first, definitely.")
}
else if(hacker1.localeCompare(hacker2) === 0){
  console.log("What?! You both have the same name?");
}

//Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis nibh vel diam rhoncus auctor. Donec enim ante, suscipit nec gravida nec, molestie nec odio. Morbi sed elementum velit, vel lacinia ante. Sed imperdiet egestas tempor. Cras vitae ligula ex. Quisque eleifend nunc sed est ullamcorper, a dictum risus eleifend. Sed in facilisis enim, vitae pellentesque neque. Proin posuere sodales malesuada. Nam commodo mattis ante at mollis. Ut posuere, ipsum vel tincidunt pulvinar, arcu tellus pretium neque, at vehicula erat turpis eget dui. Vestibulum tempor finibus ornare. Morbi consequat leo sed massa dictum pretium. Mauris aliquam orci non volutpat imperdiet. Proin sodales efficitur ultrices. Cras commodo ac felis vitae molestie.

Curabitur faucibus, metus eget rutrum molestie, lacus erat aliquet tellus, eu scelerisque sapien lacus nec leo. Nunc eget vestibulum urna, id convallis mi. Nullam condimentum augue laoreet, suscipit turpis ut, vulputate sem. Etiam vel tortor laoreet, laoreet mi non, aliquet enim. Nunc ac accumsan eros. Phasellus id luctus est, eu sagittis mi. Suspendisse interdum nulla ante, a interdum ex maximus euismod. Nam ullamcorper nisl eu ipsum tempus molestie id a est. Pellentesque id fermentum velit, nec viverra elit. Sed sapien neque, facilisis sit amet pretium ut, convallis et lacus. Nulla vel justo at lectus ornare efficitur nec id ex. Suspendisse quis orci sagittis metus placerat hendrerit. Aenean vehicula semper velit at malesuada. Praesent eget mollis nisi. Mauris nunc libero, pulvinar at mi nec, rhoncus ultricies orci. Phasellus eu massa id tortor sagittis pulvinar.

Praesent tempor eros in sapien ullamcorper fringilla. Praesent eros massa, cursus eu sapien vel, volutpat suscipit dolor. Vestibulum non diam sem. Quisque rhoncus, est in rhoncus porttitor, tellus libero tristique urna, id fermentum neque eros eu felis. Fusce nulla nisi, congue ut justo sed, tristique tempor ligula. Vestibulum rutrum nec leo eu tincidunt. Aliquam elementum est ex, eu blandit justo varius et. Vestibulum a sem lectus. Aliquam erat volutpat. Suspendisse egestas laoreet tincidunt. Sed mattis quis purus ut fringilla. Aenean faucibus felis ac mattis iaculis. Mauris convallis, lorem vel finibus iaculis, risus sapien bibendum massa, et molestie lectus nisl vel ex."
let countWords = 1
for (let u=0; u < longText.length; u++){
  if (longText[u] === " "){
    countWords+= 1
  }
}
console.log(countWords)

let countEt = 1
for (let e=0; e < longText.length; e++){
  if (longText[e] === "e" && longText[e+1] === "t"){
    countEt+= 1
  }
}
console.log(countEt)
