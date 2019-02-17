"use strict";
var firstName = document.getElementById("fname-input");
var lastName = document.getElementById("lname-input");
var department = document.getElementById("dept");
var courseNumber = document.getElementById("course-num");
var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");
var finalNextButton = document.getElementById("user-button");
var User = /** @class */ (function () {
    function User(firstName, lastName, department, courseNumber, latitude, longitude) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.courseNumber = courseNumber;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return User;
}());
finalNextButton.onclick = function (event) {
    var currentUser = new User(firstName.innerText, lastName.innerText, department.innerText, parseInt(courseNumber.innerText), parseInt(latitude.innerText), parseInt(longitude.innerText));
};

