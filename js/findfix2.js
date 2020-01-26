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

console.log("Data base is: ", database);

var ref = database.ref("fixes");
ref.on("value", gotData, errData);

//variables
var fixesList = document.getElementById("currentFixedList");
// var complaintId = document.getElementById("complaintID");
// console.log(complaintId.value);
// function checkIdStatus(){
//     searchId = complaintId.value;
//     console.log("search id is: ", searchId);
//     complaintId.value = "";
//     ref.on("value", gotData, errData);
// }

function gotData(data){
    console.log(data.val());
    var fixes = data.val();
    var keys = Object.keys(fixes);
    for(var i = 0; i < keys.length; i++){
        var k = keys[i];
        var fixedId = fixes[k].fixedId;
        var lat = fixes[k].lat;
        var long = fixes[k].long;
        var url = fixes[k].url;
        var newFix = document.createElement("li");
        var fixImg = document.createElement("img");
        // var varBreak = document.createElement("br");
        fixImg.src = url;
        newFix.textContent = "Complaint ID: " + String(fixedId) + " Lat, Long: (" + 
        String(lat) + "," + String(long) + ") Message: fixed";
        newFix.appendChild(fixImg);
        currentFixedList.appendChild(newFix);
    }
}

function errData(err){
    console.log("Error", err);
}