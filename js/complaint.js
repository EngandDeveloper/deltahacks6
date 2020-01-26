//Firebase config
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

//add data to database
var ref = database.ref("locations");


function uploadImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#photo").files[0];
    const name = +new Date() + "-" + file.name;
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
    width: 400, height: 400
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
  context.drawImage(video, 0, 0, 640, 480);
  var image = new Image();
image.id = "pic";
image.src = canvas.toDataURL();
console.log(image.src)
var button = document.createElement('button')
button.textContent = 'Upload Image'
document.body.appendChild(button)

button.onclick = function() {
  const ref = firebase.storage().ref();
  ref.child(new Date() + '-' + 'base64').putString(image.src, 'data_url').then(function(snapshot) {
  console.log('Uploaded a data_url string!');
  alert("Image Uploaded")
});
}
});



// //image
// var selectedFile = new Image();
// selectedFile.src = "images/pic01.jpg";
// var filename = "try1.jpg";

// var storageRef = firebase.storage().ref();
// var image = storageRef.child('pic01.jpg');

// // Create a reference to 'images/mountains.jpg'
// var imageRefRef = storageRef.child('images/pic01.jpg');


// // Create the file metadata
// var metadata = {
//     contentType: 'image/jpeg'
//   };
  
//   // Upload file and metadata to the object 'images/mountains.jpg'
//   var uploadTask = storageRef.child('complaintImages/' + filename).put(selectedFile, metadata);
  
//   // Listen for state changes, errors, and completion of the upload.
//   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
//     function(snapshot) {
//       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log('Upload is ' + progress + '% done');
//       switch (snapshot.state) {
//         case firebase.storage.TaskState.PAUSED: // or 'paused'
//           console.log('Upload is paused');
//           break;
//         case firebase.storage.TaskState.RUNNING: // or 'running'
//           console.log('Upload is running');
//           break;
//       }
//     }, function(error) {
  
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     switch (error.code) {
//       case 'storage/unauthorized':
//         // User doesn't have permission to access the object
//         break;
  
//       case 'storage/canceled':
//         // User canceled the upload
//         break;
  
//       case 'storage/unknown':
//         // Unknown error occurred, inspect error.serverResponse
//         break;
//     }
//   }, function() {
//     // Upload completed successfully, now we can get the download URL
//     uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
//       console.log('File available at', downloadURL);
//       imageUrl = downloadURL;
//     });
//   });
  





//given images:



//image storage
// var uploadImage = firebase.storage().ref().child('complainImages/' + selectedFile.name).put(selectedFile);
// var filename = selectedFile.name;

// console.log("file name is ", filename);
// var storageRef = firebase.storage().ref('/complaintImages/' + filename);
// var uploadImage = storageRef.put(selectedFile);
// uploadImage(function(snapshot){
//     var imageUrl = uploadImage.snapshot.downloadURL;
//     var updates = {};
//     var postData = {
//         url: imageUrl,
//         caption: "uploaded",
//     }
//     updates['locations'] = ref
// });


//our code
var position = navigator.geolocation.getCurrentPosition( newComplaint );
function newComplaint(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log("Lat and long of the new complaint are: ", lat, long);

    var complaintText = document.getElementById(''); // get user complaint's text
    var complainImage = document.getElementById(''); // get user complaint's image
    var complaintId = parseInt(Math.random() * 1000000000 + 1);
    var data = {
        complaintId: complaintId,
        lat: lat,
        long: long,
        url: imageUrl,
    };
    ref.push(data);
    console.log(complaintId);
}

function newFix(complaintId, position){
    var lat = position.coords.latitude;
    var long = position.coors.longitude;
    console.log("Lat and long of the new fix are: ", lat, long);
}

newComplaint();
newFix(234, position);


