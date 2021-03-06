"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = __importStar(require("firebase/app"));
require("firebase/auth");
require("firebase/firestore");
/**
 * Initialize Firebase
 *
 * NOTE: This will be publically visible
 * please don't accidentally publish your
 * actual production credentials here.
 * Create a sample project that mimics
 * your setup to reproduce the error.
 */
// Reproduce Issue below
// ...
exports.auth = firebase.auth();
// export const database = firebase.database();
var firstName = document.getElementById("fname-input");
var lastName = document.getElementById("lname-input");
var department = document.getElementById("dept");
var courseNumber = document.getElementById("course-num");
var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");
var finalNextButton = document.getElementById("user-button");
var database = firebase.database();
var ref = database.ref("https://learntogether-1a02d.firebaseio.com");
var User = /** @class */ (function () {
    function User(firstName, lastName, department, courseNumber, latitude, longitude) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.courseNumber = courseNumber;
        this.latitude = latitude;
        this.longitude = longitude;
        this.distance = 0;
    }
    return User;
}());
finalNextButton.onclick = function (event) {
    var currentUser = new User(firstName.innerText, lastName.innerText, department.innerText, parseInt(courseNumber.innerText), parseInt(latitude.innerText), parseInt(longitude.innerText));
    ref.on("value", function (snapshot) {
        console.log(snapshot.val());
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    var usersRef = ref.child("user").push();
    usersRef.set({
        course_number: courseNumber, depart: department,
        first_name: firstName, last_name: lastName, lat: latitude, long: longitude
    }, function (error) {
        if (error) {
            // The write failed...
        }
        else {
            // Data saved successfully!
        }
    });
    var myUserId = firebase.auth().currentUser.uid;
    var sortedDepartments = firebase.database().ref("user/" + myUserId).equalTo("depart");
    var sortedClasses = sortedDepartments.equalTo("course_number");
    ref.on("child_added", function (snapshot, prevChildKey) {
        var newPost = snapshot.val();
        console.log("First Name: " + newPost.first_name);
        console.log("Last Name: " + newPost.last_name);
        console.log("Previous Post ID: " + prevChildKey);
    });
};
var getDistance = function (lat1, lat2, lng1, lng2) {
    var latDiff = Math.abs(lat1 - lat2);
    var lngDiff = Math.abs(lng1 - lng2);
    return Math.sqrt(latDiff + lngDiff);
};
