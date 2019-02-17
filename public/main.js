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
    firebase.database().ref("user/" + currentUser).set({ courseNumber: firstName,
        department: department, firstName: firstName, lastName: lastName, latitude: latitude, longitude: longitude
    });
};
var getDistance = function (lat1, lat2, lng1, lng2) {
    var latDiff = Math.abs(lat1 - lat2);
    var lngDiff = Math.abs(lng1 - lng2);
    return Math.sqrt(latDiff + lngDiff);
};
