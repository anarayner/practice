const arr1 = [1, 2, 3, 4, 5];

const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');

function changeArray(anyArray, myCallbackFunction, anyBlock) {
  anyArray[3] = anyArray[3] * 2;
  //out1.innerHTML = arr1; // let replace with callback
  myCallbackFunction(anyArray, anyBlock);
}

function showArr(arr, block) {
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    out += arr[i] + ' ';
  }
  block.innerHTML = out;
}

changeArray(arr1, showArr, out2);

// callback in map
const arr2 = arr1.map(doubleElement);

function doubleElement(elem) {
  return elem * 2;
}

// same here
const arr3 = arr1.map((el) => el * 2);

// example with input
document
  .querySelector('.b-1')
  .addEventListener('click', () => getUserName(fixUserName));

function getUserName(fixCallback) {
  const userName = document.querySelector('.input-1').value;
  console.log(fixCallback(userName));
}

function fixUserName(str) {
  return str.trim().toLowerCase();
}

// async callback

async function pageLoader(callback) {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  callback(data);
}

function getResponse(data) {
  console.log('Sending request..');
  console.log('Server responding..');
  let response = data.json(); // return Promise
  response.then((item) => console.log(item));
}

pageLoader(getResponse);

// same here

function pageLoader2(callback) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => callback(json));
}

function getResponse2(data) {
  console.log('Sending request..');
  console.log('Server responding..');
  console.log(data);
}

pageLoader2(getResponse2);
