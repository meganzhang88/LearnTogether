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

    constructor(firstName: string, lastName: string, department: string, courseNumber: number, latitude: number, longitude: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.courseNumber = courseNumber;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

finalNextButton.onclick = (event: MouseEvent) => {
    let currentUser = new User(firstName.innerText, lastName.innerText, department.innerText, parseInt(courseNumber.innerText), parseInt(latitude.innerText), parseInt(longitude.innerText));
}