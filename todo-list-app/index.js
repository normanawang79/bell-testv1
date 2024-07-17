const prompt = require('prompt-sync')();
// define the array that stores your collection of records.
// also define one or two sample records
// eg. let todos = [{
//    {
//       id: 1,
//       name: "Wash the car",
//       urgency: 5
//    }
//}];
let movies = [
  {
    id: 1,
    name: "The Godfather",
    year: 1972
  },

  {
    id: 2,
    name: "The Godfather Part II",
    year: 1974
  },

  {
    id: 9999,
    name: "The Godfather Part III",     year: 1975

  }
  
];

// for the add function, you should include extra parameters for each key you want to
// to store in the record. See the walkthrough.
function addmovie(movies, name, year)) {
  let movieRecord = {
    "name": name,
    "year": year  
  }
}

addmovie(movies, "The Godfather", 1972)
console.log(movies);
// for the add function, you should include extra parameters for each key you want to
// to update  in the record. See the walkthrough.









function update(todos, id) {
  
}

function delete(todos, id) {
  
}

// TEST FUNCTIONS HERE

// write code here to test your `add` function


// write code here to test your `update` function


// write code here to test your `delete` function