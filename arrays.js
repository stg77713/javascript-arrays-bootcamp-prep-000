var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  array.unshift(ele)
  return array 
}