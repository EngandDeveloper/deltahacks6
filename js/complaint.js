// Firebase config
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpUTMCZ_0CTHZEQ17BmtonkJ7VaTTFTjM",
    authDomain: "deltahacks6-fa1f6.firebaseapp.com",
    databaseURL: "https://deltahacks6-fa1f6.firebaseio.com",
    projectId: "deltahacks6-fa1f6",
    storageBucket: "deltahacks6-fa1f6.appspot.com",
    messagingSenderId: "568515317237",
    appId: "1:568515317237:web:3c74db9d68b59b7baf64bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//new database
var database = firebase.database();
console.log("Firebase is working???", database);

//html objects
var complaintMessage = document.getElementById("complaintMessage");
var complaintMessageOutput = document.getElementById("complaintMessageOutput");

function submitMes(){
    complaintMessageOutput.textContent = complaintMessage.value;
    complaintMessage.value = "";
}

//add data to database
var ref = database.ref("locations");
var imgURL = String(localStorage.getItem("imgUrl"));
var start = localStorage.getItem("start");
console.log("LOCALE STORAGE IS:", localStorage.getItem("imgUrl"));
console.log("In complaint.js url is ", imgURL);

var complaintId = 0;
var lat = 0;
var long = 0;

//our code
pic_taken = false;
console.log(localStorage.getItem("pic"));
var position = navigator.geolocation.getCurrentPosition( newComplaint );
function newComplaint(position){
    pic_taken = localStorage.getItem("pic");
    lat = position.coords.latitude;
    long = position.coords.longitude;
    lat = parseFloat(lat).toFixed(2);
    long = parseFloat(long).toFixed(2);
    console.log("Lat and long of the new complaint are: ", lat, long);

    // var complaintText = document.getElementById(''); // get user complaint's text
    // var complainImage = document.getElementById(''); // get user complaint's image
    complaintId = parseInt(Math.random() * 1000000000 + 1);
    
}


// added CAMERA . JS HERE

function uploadImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#photo").files[0];
    const name = +new Date() + "-" + "test1";
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        console.log(url);
        document.querySelector("#image").src = url;
      })
      .catch(console.error);
  }
  
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const snap = document.getElementById("snap");
  const errorMsgElement = document.querySelector('span#errorMsg');
  
  const constraints = {
      audio: false,
      video: {
          width: 640, height: 480
      }
  };
  
  // Access webcam
  async function init() {
      try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          handleSuccess(stream);
      } catch (e) {
              errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
          }
  }
  
  // Success
  function handleSuccess(stream) {
      window.stream = stream;
      video.srcObject = stream;
  }
  
  // Load init
  init();
  
  // Draw image
  var context = canvas.getContext('2d');
  snap.addEventListener("click", function() {
    context.drawImage(video, 0, 0, 400, 400);
    var image = new Image();
    image.id = "pic";
    image.src = canvas.toDataURL();
    console.log(image.src)
    var button = document.createElement('button')
    button.textContent = 'Upload Image'
    document.body.appendChild(button)
    var imgUrl = "placeholder";
    button.onclick = function() {
    const stor = firebase.storage().ref();
    stor.child(new Date() + '-' + 'base64').putString(image.src, 'data_url').then(function(snapshot) {
        console.log('Uploaded a data_url string!');
        alert("Image Uploaded");
        // console.log("FILEEEEEEEEEEEEE 1: ", this.imgUrl);
        snapshot.ref.getDownloadURL().then(function(downloadURL){
            console.log('File available at', downloadURL);
            imgUrl = String(downloadURL);
            // console.log("FILEEEEEEEEEEEEE4: ", imgUrl);
            // console.log("LOCAL STORAGE IS HERE: ", localStorage.getItem("imgUrl"));
            // console.log("FILEEEEEEEEEEEEE: ", imgUrl);
            localStorage.setItem("URL",String(downloadURL));   
          });
        snapshot.ref.getDownloadURL().then(function(downloadURL) {
            var data = {
                complaintId: complaintId,
                lat: lat,
                long: long,
                url: String(downloadURL),
                message: String(complaintMessageOutput.textContent),
            };
            ref.push(data);
        });

          
        // ref.push(data);
        console.log(complaintId);
      });
  }
    var iUrl = localStorage.getItem("imgUrl");
    imgUrl = iUrl
    // console.log("FILEEEEEEEEEEEEE 2: ", imgUrl);
});

function newFix(complaintId, position){
    var lat = position.coords.latitude;
    var long = position.coors.longitude;
    console.log("Lat and long of the new fix are: ", lat, long);
}

// while(imgURL != null){
//     if(complaintMessageOutput.textContent != ""){
//         newComplaint();
//         newFix(234, position);
//         start = false;
//     }else{
//         alert("Please enter a complaint message!!!");
//     }
// }

console.log("got here?")