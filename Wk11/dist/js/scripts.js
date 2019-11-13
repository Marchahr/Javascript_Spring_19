
/* This is my first code
 * this is what it does
 */

/*
let button = document.getElementById('GetUsersAPI');
button.addEventListener("click", getUserData);

function getUserData() {
    let url = "https://reqres.in/api/users";

    request({url: url})
      .then(function(resp) {

                for(let i=0; i<resp.data.length; i++) {
                  var img = document.createElement('img');
                  img.src = resp.data[i].avatar;
                  console.log(resp.data[i]);

                  var outp = document.getElementById("Output");
                  outp.appendChild(img);

                }

      })

}

let request = obj => {

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", obj.url, true);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(null);
    })
    .catch(error => {
        console.log(error);
    });

}
*/
// function getUserData() {
//   let url = "https://reqres.in/api/users";
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.onreadystatechange = () => {
//           if (xhr.readyState === 4 ) {
//             if (xhr.status === 200) {
//                 document.getElementById("Output").innerHTML = xhr.responseText;
//                 var resp = JSON.parse(xhr.responseText);

//                 for(let i=0; i<resp.data.length; i++) {
//                   var img = document.createElement('img');
//                   img.src = resp.data[i].avatar;
//                   console.log(resp.data[i]);

//                   var outp = document.getElementById("Output");
//                   outp.appendChild(img);

//                 }

//             } else {
//                 document.getElementById("Output").innerHTML = "There was an error";
//             }
//           }
//   };
//   xhr.send(null);
// }

function tt(testv = 4) {
  console.log('news testv',testv);
  alert('this is a test. s sdsas');

}










/* This is my first code
 * this is what it does
 */


let button = document.getElementById('GetUsersAPI');
button.addEventListener("click", getUserData);
tt();

function getUserData() {
  let url = "https://reqres.in/api/users";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 ) {
            if (xhr.status === 200) {
                document.getElementById("Output").innerHTML = xhr.responseText;
                var resp = JSON.parse(xhr.responseText);

                for(let i=0; i<resp.data.length; i++) {
                  var img = document.createElement('img');
                  img.src = resp.data[i].avatar;
                  console.log(resp.data[i]);

                  var outp = document.getElementById("Output");
                  outp.appendChild(img);

                }
            } else {
                document.getElementById("Output").innerHTML = "There was an error";
            }
          }
  };
  xhr.send(null);
}

function tt(testv = 4) {
  console.log('new test',testv);
  alert('this is a test. s sas');

}








