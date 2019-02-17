// Import the core node modules.
import firebase = require( "firebase/app" );

// Import the other firebase modules for their SIDE-EFFECTS! These imports will augment
// the App module and provide the type-definition for the .database() method.
import "firebase/database";
import { config } from "./config";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// Initialize the Firebase application.
// --
// NOTE: Obviously, I'm obfuscating my app credentials here.
export let main = () => {
    firebase.initializeApp(config);



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

// Access the real-time database in the initialized application.
let db: firebase.database.Database = config.database();

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

let Chiazo  = new User("Chiazo", "Agina", "CLAS", 51, -34, 45);

// Try to write to and read back from Firebase.
(async function test() {
    try {
  
      var testUser: firebase.database.Reference = db.ref("user/");
    
      await testUser.push({
            course_number: Chiazo.courseNumber, depart: Chiazo.department,
            first_name: Chiazo.firstName, last_name: Chiazo.lastName, lat: Chiazo.latitude, long: Chiazo.longitude
      });
  
      var testUserSnapshot: firebase.database.DataSnapshot = await testUser.once("value");
  
      console.log("Firebase Ref Value:");
      console.dir(testUserSnapshot.val());
    
    } catch (error) {
      console.log("Error!");
      console.log (error);
    } 
  }) ();
}

