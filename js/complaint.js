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
// firebase.initializeApp(firebaseConfig);

//new database
var database = firebase.database();
console.log("Firebase is working???", database);

//add data to database
var ref = database.ref("locations");
var imgURL = localStorage.getItem("imgUrl");
var start = localStorage.getItem("start");
console.log("LOCALE STORAGE IS:", localStorage.getItem("imgUrl"));
console.log("In complaint.js url is ", imgURL);

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
        // url: imageURL,
    };
    ref.push(data);
    console.log(complaintId);
}

function newFix(complaintId, position){
    var lat = position.coords.latitude;
    var long = position.coors.longitude;
    console.log("Lat and long of the new fix are: ", lat, long);
}

while(start){
    newComplaint();
    newFix(234, position);
    start = false;
}

