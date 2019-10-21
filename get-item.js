const libraryChai = require('chai')

const expect = libraryChai.expect;
require('../fun-day1/get-item')


function getItem(arr, index) {
  if (arr.length > index) {
    return
  } else {
    return arr[index]
  }
}

