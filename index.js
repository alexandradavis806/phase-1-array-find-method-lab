// code your solution here


// function superbowlWin(array) {
//     for (let result of) 
// }

// record.find(superbowlWin);


const record = [
    { year: "2018", result: "N/A"},
]


const fun = (element) => {
    if (element["result"] === 'W') {
        return true
    }
    return false
}

// console.log(fun({ year: "2015", result: "W"}))

// function sadReality(array) {
//     if (fun(element) === false) {
//         return x
//     }

// }

console.log(superbowlWin(record));

function superbowlWin(array) {
    let x = array.find(fun)
    if (x === undefined) {
        return undefined
    }
    return x.year;
  }


  



//   console.log()
//   const x = record.find(fun)
// //   console.log(x.year)
    
//     record.find(fun)