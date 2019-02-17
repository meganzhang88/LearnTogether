let firstName = <HTMLInputElement>document.getElementById("fname-input") as HTMLInputElement;
let lastName = document.getElementById("lname-input") as HTMLInputElement;
let department = document.getElementById("dept") as HTMLInputElement;
let courseNumber = document.getElementById("course-num") as HTMLInputElement;
let latitude = document.getElementById("latitude") as HTMLInputElement;
let longitude = document.getElementById("longitude") as HTMLInputElement;
let finalNextButton = document.getElementById("user-button") as HTMLElement;
let firstButton = document.getElementById("submit-name") as HTMLElement;

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


firstButton.onclick = (event: MouseEvent) => {
    console.log(firstName.value);
    alert(firstName.value);
    let currentUser = new User(firstName.value, lastName.value, department.value, parseFloat(courseNumber.value), parseInt(latitude.value), parseInt(longitude.value));
    
};



