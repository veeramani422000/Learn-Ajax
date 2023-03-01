// AJAX - Asynchronous Javascript And XML

// const object = {
//  name:"veeramani",
//  age:22,
// };

//XML - (<object><name><veeramani></nmae><age><22></age></object>) - XMLParser

//JSON - Javascript Object Notation
//String, Number, Object, Array

//XMLHttpRequest

//CRUD

//GET - READ
//POST - CREATE
//PATCH(PUT) - UPDATE
//DELETE - DALETE

//url
//https://jsonplaceholder.typicode.com/photos

//0 -> UNSENT
//1 -> OPEN
//2 -> HEADERS_RECEIVED
// -- ERROR --
//3 -> LOADING
//4 -> DONE

const url ="https://jsonplaceholder.typicode.com/photos";

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if(xhr.readyState == 4){
   if(xhr.status == 200){
   const photosArray = JSON.parse(xhr.response);
   console.log(photosArray[0]);
  }
  else{
   console.log("ERROR");
  }
 }
};

xhr.open("GET",url);
xhr.send();

