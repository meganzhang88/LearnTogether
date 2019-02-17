"use strict";
var firstName = document.getElementById("fname-input");
var lastName = document.getElementById("lname-input");
var department = document.getElementById("dept");
var courseNumber = document.getElementById("course-num");
var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");
var finalNextButton = document.getElementById("user-button");
var firstButton = document.getElementById("submit-name");
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
firstButton.onclick = function (event) {
    var currentUser = new User(firstName.value, lastName.value, department.value, parseFloat(courseNumber.value), parseInt(latitude.value), parseInt(longitude.value));
};
