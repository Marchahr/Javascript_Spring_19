

var data;

var txt = '$$Exclamation$$! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.';

function setup() {
  noCanvas();
  Tabletop.init({
    key: '15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs',
    callback: gotData,
    simpleSheet: true
  });

  var button = createButton('generate madlib');
  button.mousePressed(generate);
}

function replacer(match, pos) {
  var entry = random(data);
  return entry[pos];
}


function generate() {
  //console.log('generate');
  var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer);
  createP(madlib);
}

function gotData(stuff) {
  data = stuff;
}





let answers  = {
first_word: "",
second_word: "",
//"third_word": "",
};

answers [0] 

var answers_payload = JSON.stringify(answers);
 console.log(answers);
 console.log(answers_payload);

 var answersn_object = JSON.parse(answers_payload);
 // console.log(converted);



// //AJAX METHODS - GET
let button = document.getElementById('getAnswerData');

// }




//POST
const form = document.getElementById("createUser");

button.addEventListener("click", SendData);
function SendData(event) {
  event.preventDefault();
  let url = "https://api.datamuse.com/words?max=5&ml=" + form.first_word.value;
  const ul = document.createElement('ul');

  callApi(url, "Exclamation");

  url = "https://api.datamuse.com/words?max=5&ml=" + form.second_word.value;

  callApi(url, "Adverb");

  function callApi(sendurl, location) {
    fetch(sendurl)
    .then(function(response) {
      return response.json();
      //GETTING the data and converts to json
    })
    .then(function(resp) {
        let random = Math.floor(Math.random() * resp.length);
        resp[random].word;
        console.log(resp[random].word);
        document.getElementById(location).innerHTML = resp[random].word;
    })
    .catch(function(resp) {
      document.getElementById("Output").innerHTML = "There was an error";
    });
  }
}
//  let xhr = new XMLHttpRequest();
//  xhr.onload = function() {
//     if (xhr.status === 200) {
//     //document.getElementById("Output").innerHTML = xhr.responseText;
//     //^was showing all the API results on user side
//     const resp = JSON.parse(xhr.response);
//     //write a loop code here and create html element to display name/image ect. in the html
//     let random = Math.floor(Math.random() * resp.length);


//     resp[random].word;
//     console.log(resp[random].word);
//     document.getElementById(location).innerHTML = resp[random].word;


//     } else {
//       document.getElementById("Output").innerHTML = "There was an error";
//     }
//   }
//   xhr.open("GET", sendurl, true);
//   xhr.send(); //data needs to be the
//   console.log(xhr);
// }
// };




// button.addEventListener("click", getUserData);
// function madLibs() {
// let url = "https://api.datamuse.com/words?max=5&ml=";
// fetch(url)
// .then(function(response) {
// return response.json();
// })
// .then(function(resp) {
// document.getElementById("Output").innerHTML =
// JSON.stringify(resp.data);
// })
// .catch(function(resp) {
// document.getElementById("Output").innerHTML =
// "There was an error";
// });
// }
/*
let xhrOne = new XMLHttpRequest();
const ulOne = document.createElement('ul');


xhrOne.onload = function() {
if (xhrOne.status === 200) {
//document.getElementById("Output").innerHTML = xhr.responseText;
//^was showing all the API results on user side
const resp = JSON.parse(xhrOne.response);
//write a loop code here and create html element to display name/image ect. in the html
let random = Math.floor(Math.random() * resp.length);


resp[random].word;
console.log(resp[random].word);
document.getElementById("Adverb").innerHTML = resp[random].word;


} else {
document.getElementById("Output").innerHTML = "There was an error";
}
}
xhrOne.open("GET", url, true);
xhrOne.send(); //data needs to be the


console.log(xhrOne);

}*/


//Fetch Function Example:



// let button = document.getElementById('getAnswerData');




