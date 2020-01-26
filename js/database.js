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

console.log("Data base is: ", database);

var ref = database.ref("locations");
ref.on("value", gotData, errData);

//variables
var currentComplaintsList = document.getElementById("currentComplaintsList");

function gotData(data){
    console.log(data.val());
    var locations = data.val();
    var keys = Object.keys(locations);
    for(var i = 0; i < keys.length; i++){
        var k = keys[i];
        var complaintId = locations[k].complaintId;
        var lat = locations[k].lat;
        var long = locations[k].long;
        var url = locations[k].url;
        var message = locations[k].message;
        console.log(complaintId, lat, long, url);
        var newComplaint = document.createElement("li");
        var complaintImg = document.createElement("img");
        complaintImg.src = url;
        newComplaint.textContent = "Complaint ID: " + String(complaintId) + " Lat, Long: (" + 
        String(lat) + "," + String(long) + ") Message: " + String(message);
        newComplaint.appendChild(complaintImg);
        currentComplaintsList.appendChild(newComplaint);
    }
}

function errData(err){
    console.log("Error", err);
}