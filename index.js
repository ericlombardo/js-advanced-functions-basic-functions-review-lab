function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
} 

function wrapAdjective(flair = "*"){
  return function(string = 'special'){
    return `You are ${flair + string + flair}!`
  } 
}

const Calculator = {
  
  add: function(num1, num2) {
    return num1 + num2
  },

  subtract: function(num1, num2) {
    return num1 - num2
  },

  multiply: function(num1, num2){
    return num1 * num2
  },

  divide: function(num1, num2){
    return num1 / num2
  },

}
let actionApplyer = function(startInt, arrayOfFunctions){ // checked solution to make sure I was creating
  for (const ray of arrayOfFunctions){                    // object correctly in key value pairs and for 
    startInt = ray(startInt)                              // for iteration throught the functions
  }
  return startInt
}