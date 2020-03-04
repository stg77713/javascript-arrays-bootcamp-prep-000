var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele)
  return arr 
}

function addElementToEndOfArray(arr, ele) {
  return [...arr, ele]
}

function destructivelyAddElementtoEndOfArray(arr, ele){
  array.push(ele)
  return array
}

function accessElementInArray(arr, index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  
  return array
}

function removeElementFromBeginningofArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}