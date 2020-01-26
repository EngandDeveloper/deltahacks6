var imgUrl = "url";
var start = false;

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
        alert("Image Uploaded");
        console.log("FILEEEEEEEEEEEEE 1: ", this.imgUrl);
        snapshot.ref.getDownloadURL().then(function(downloadURL){
            console.log('File available at', downloadURL);
            imgUrl = String(downloadURL);
            console.log("FILEEEEEEEEEEEEE4: ", imgUrl);
            localStorage.setItem("imgUrl", imgUrl);
            console.log("LOCAL STORAGE IS HERE: ", localStorage.getItem("imgUrl"));
            console.log("FILEEEEEEEEEEEEE: ", imgUrl);
        });
    });
}
var iUrl = localStorage.getItem("imgUrl");
imgUrl = iUrl
console.log("FILEEEEEEEEEEEEE 2: ", imgUrl);
});
