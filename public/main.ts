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
export const database = firebase.database();

var firstName = document.getElementById("fname-input") as HTMLElement;
var lastName = document.getElementById("lname-input") as HTMLElement;
var department = document.getElementById("dept") as HTMLElement;
var courseNumber = document.getElementById("course-num") as HTMLInputElement;
var latitude = document.getElementById("latitude") as HTMLElement;
var longitude = document.getElementById("longitude") as HTMLElement;
var finalNextButton = document.getElementById("user-button") as HTMLElement;

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
} 

let getDistance = (lat1: number, lat2: number, lng1: number, lng2: number): number => {
    let latDiff : number = Math.abs(lat1 - lat2);
    let lngDiff : number = Math.abs(lng1 - lng2);
    return Math.sqrt(latDiff + lngDiff);
}
