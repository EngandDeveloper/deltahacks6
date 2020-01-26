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

var ref = database.ref("fixes");


//variables
// var fixesList = document.getElementById("currentFixedList");
var complaintId = document.getElementById("complaintID");
console.log(complaintId.value);
function checkIdStatus(){
    searchId = complaintId.value;
    console.log("search id is: ", searchId);
    complaintId.value = "";
    ref.on("value", gotData, errData);
}

function gotData(data){
    console.log(data.val());
    var fixes = data.val();
    var keys = Object.keys(fixes);
    for(var i = 0; i < keys.length; i++){
        var k = keys[i];
        if(fixes[k].fixedId == searchId){
            var fixedId = fixes[k].fixedId;
            var lat = fixes[k].lat;
            var long = fixes[k].long;
            var url = fixes[k].url;
            // var message = locations[k].message;
            console.log(complaintId, lat, long, url);
            // var newComplaint = document.createElement("li");
            // var complaintImg = document.createElement("img");
            var fixedPhoto = document.getElementById("fixedPhoto");
            fixedPhoto.src = url;
            var fixStatus = document.getElementById("fixStatus");
            fixStatus.textContent = "Great news! Your complained is fixed!"
            // newComplaint.textContent = "Complaint ID: " + String(complaintId) + " Lat, Long: (" + 
            // String(lat) + "," + String(long) + ") Message: " + String(message);
            // newComplaint.appendChild(complaintImg);
            // currentComplaintsList.appendChild(newComplaint);
        }

        // var newFix = document.createElement("li");
        // var fixImg = document.createElement("img");
        // fixImg.src = url;
        // newFix.textContent = "Complaint ID: " + String(fixedId) + " Lat, Long: (" + 
        // String(lat) + "," + String(long) + ")";
        // newFix.appendChild(complaintImg);
        // currentFixedList.appendChild(newComplaint);

    }
}

function errData(err){
    console.log("Error", err);
}