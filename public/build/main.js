"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("firebase/app"));
require("firebase/auth");
require("firebase/firestore");
const config_1 = require("./config");
const fb_test_1 = require("./fb-test");
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
exports.default = firebase.auth();
// export const database = firebase.database();
firebase.initializeApp(config_1.config);
let firstName = document.getElementById("fname-input");
var lastName = document.getElementById("lname-input");
var department = document.getElementById("dept");
var courseNumber = document.getElementById("course-num");
var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");
var finalNextButton = document.getElementById("user-button");
var database = firebase.database();
let db = config_1.config.database();
let firstButton = document.getElementById("submit-name");
class User {
    constructor(firstName, lastName, department, courseNumber, latitude, longitude) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.courseNumber = courseNumber;
        this.latitude = latitude;
        this.longitude = longitude;
        this.distance = 0;
    }
}
firstButton.onclick = (event) => {
    alert(firstName.innerText);
    fb_test_1.main();
    alert("We're going through here...");
    let ref = db.ref("learntogther-1a02d/").child("user");
    let usersRef = ref.push();
    usersRef.set({
        first_name: "Chiazo", last_name: "Agina"
    }, (error) => {
        if (error) {
            console.log(error.message);
        }
        else {
            alert("it worked!");
            console.log("it worked!");
        }
    });
};
finalNextButton.onclick = (event) => {
    alert(firstName.innerText);
    let currentUser = new User(firstName.innerText, lastName.innerText, department.innerText, parseInt(courseNumber.innerText), parseInt(latitude.innerText), parseInt(longitude.innerText));
    let ref = db.ref("learntogther-1a02d/").child("user");
    let usersRef = ref.push();
    usersRef.set({
        course_number: currentUser.courseNumber, depart: currentUser.department,
        first_name: currentUser.firstName, last_name: currentUser.lastName, lat: currentUser.latitude, long: currentUser.longitude
    }, (error) => {
        if (error) {
            console.log(error.message);
        }
        else {
            alert("it worked!");
            console.log("it worked!");
        }
    });
    let myUserId = firebase.auth().currentUser.uid;
    let sortedDepartments = firebase.database().ref("user/" + myUserId).equalTo("depart");
    let sortedClasses = sortedDepartments.equalTo("course_number");
};
let getDistance = (lat1, lat2, lng1, lng2) => {
    let latDiff = Math.abs(lat1 - lat2);
    let lngDiff = Math.abs(lng1 - lng2);
    return Math.sqrt(latDiff + lngDiff);
};
//# sourceMappingURL=main.js.map