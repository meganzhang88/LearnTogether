import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

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

export const auth = firebase.auth();
// export const database = firebase.database();


var firstName = document.getElementById("fname-input") as HTMLElement;
var lastName = document.getElementById("lname-input") as HTMLElement;
var department = document.getElementById("dept") as HTMLElement;
var courseNumber = document.getElementById("course-num") as HTMLInputElement;
var latitude = document.getElementById("latitude") as HTMLElement;
var longitude = document.getElementById("longitude") as HTMLElement;
var finalNextButton = document.getElementById("user-button") as HTMLElement;
var database = firebase.database();
var ref = database.ref("https://learntogether-1a02d.firebaseio.com");

class User {
    firstName: string;
    lastName: string;
    department: string;
    courseNumber: number;
    latitude: number;
    longitude: number;
    distance: number;

    constructor(firstName: string, lastName: string, department: string, courseNumber: number, latitude: number, longitude: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.courseNumber = courseNumber;
        this.latitude = latitude;
        this.longitude = longitude;
        this.distance = 0;
    }
}

finalNextButton.onclick = (event: MouseEvent) => {
    let currentUser = new User(firstName.innerText, lastName.innerText, department.innerText, parseInt(courseNumber.innerText), parseInt(latitude.innerText), parseInt(longitude.innerText));
    
    ref.on("value", function(snapshot) {
        console.log(snapshot!.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    let usersRef = ref.child("user").push();
    usersRef.set({
        course_number: courseNumber, depart: department,
        first_name: firstName, last_name: lastName, lat: latitude, long: longitude
      }, function(error) {
        if (error) {
          // The write failed...
        } else {
          // Data saved successfully!
        }
      });
    
      let myUserId = firebase.auth().currentUser!.uid;
      let sortedDepartments = firebase.database().ref("user/" + myUserId).equalTo("depart");
      let sortedClasses = sortedDepartments.equalTo("course_number");

      ref.on("child_added", function(snapshot, prevChildKey) {
        var newPost = snapshot!.val();
        console.log("First Name: " + newPost.first_name);
        console.log("Last Name: " + newPost.last_name);
        console.log("Previous Post ID: " + prevChildKey);
      });
};




let getDistance = (lat1: number, lat2: number, lng1: number, lng2: number): number => {
    let latDiff : number = Math.abs(lat1 - lat2);
    let lngDiff : number = Math.abs(lng1 - lng2);
    return Math.sqrt(latDiff + lngDiff);
}

