// setTimeout(() => console.log('TWo seconds'), 2000);
// const names = ['Aram', 'Artash', 'Sergey'];
// const shortNames = names.filter(name => name.length <= 4);
// console.log(shortNames)
//
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const  data = {
//             lat: 0,
//             long: 0,
//         };
//         callback (data)
//     }, 2000)
//
// }
//
// geocode('Armenia', (date) => console.log(date))

// const add = (num1, num2, callback) => {
//     setTimeout(() => callback(num1, num2), 2000)
// }
// console.log(add(4, 5, () ))
// TODO Watch the 35 video one more time


const add = (num1, num2, callback) => {
  setTimeout(() => {
    return callback(num1 + num2)
  }, 2000)
}

const res = add(5, 2, (sum) => {
  console.log(sum)
})
console.log(res);
