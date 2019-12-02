
/* This is my first code
 * this is what it does
 */


let button = document.getElementById('GetUsersAPI');
button.addEventListener("click", getUserData);
test1();

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

function test1(testv = 4) {
  console.log('testv',testv);
}








