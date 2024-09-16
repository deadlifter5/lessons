// // Battlefield size
// const size = 6
// const totalShipsNum = 5
// let shots = 10
// let remainedShips = totalShipsNum
// // 2-Dimentional array generetion --->
// function getBattlefield() {
//   const battlefieldArr = []
//   for (let row = 0; row < 6; row++) {
//     battlefieldArr[row] = []
//     for (let col = 0; col < 6; col++) {
//       battlefieldArr[row][col] = 0
//     }
//   }
//   return battlefieldArr
// }

// // Creation of battlefield --->
// const battlefield = getBattlefield()
// console.log(battlefield)

// // Random number generation
// function getRandNum(size) {
//   return Math.floor(Math.random() * 6)
// }

// // Ships location --->
// function shipLoction(size) {
//   let locatedShips = 0
//   while (locatedShips < totalShipsNum) {
//     const row = getRandNum(size)
//     let col = getRandNum(size)
//     if (battlefield[row][col] === 0) {
//       battlefield[row][col] === 1
//       locatedShips++
//     }
//   }
// }
// // Gameplay --->
// function gameplay(size) {
//   shipLoction(size)
//   while (shots > 0 && remainedShips > 0) {
//     let row = parseInt(prompt(`Enter row number (0-${size - 1})`))
//     let col = parseInt(prompt(`Enter column number (0-${size - 1})`))
//     if (row >= 0 && row < size && col >= 0 && col < size) {
//       if (battlefield[row][col] === 1) {
//         alert("Got it! Ship destroyed!")
//         battlefield[row][col] = -1
//         remainedShips--
//       } else if (battlefield[row][col] === 0) {
//         alert("Wrong!")
//         battlefield[row][col] = -1
//       } else alert("Shot here already!")
//       shots--
//       alert(`Shots remain ${shots}`)
//     }
//   }
//   if (remainedShips === 0) alert("Congrats, you destroyed all ships!")
//   else alert("Game over, you have no shots left")
// }
// gameplay(size)

Код підглянуто, не зараховую собі в актив, принцип розумію, але сам би не повторив!
