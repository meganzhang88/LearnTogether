"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core node modules.
const firebase = require("firebase/app");
// Import the other firebase modules for their SIDE-EFFECTS! These imports will augment
// the App module and provide the type-definition for the .database() method.
require("firebase/database");
const config_1 = require("./config");
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
// Initialize the Firebase application.
// --
// NOTE: Obviously, I'm obfuscating my app credentials here.
exports.main = () => {
    firebase.initializeApp(config_1.config);
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
    // Access the real-time database in the initialized application.
    let db = config_1.config.database();
    // ----------------------------------------------------------------------------------- //
    // ----------------------------------------------------------------------------------- //
    let Chiazo = new User("Chiazo", "Agina", "CLAS", 51, -34, 45);
    // Try to write to and read back from Firebase.
    (function test() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var testUser = db.ref("user/");
                yield testUser.push({
                    course_number: Chiazo.courseNumber, depart: Chiazo.department,
                    first_name: Chiazo.firstName, last_name: Chiazo.lastName, lat: Chiazo.latitude, long: Chiazo.longitude
                });
                var testUserSnapshot = yield testUser.once("value");
                console.log("Firebase Ref Value:");
                console.dir(testUserSnapshot.val());
            }
            catch (error) {
                console.log("Error!");
                console.log(error);
            }
        });
    })();
};
//# sourceMappingURL=fb-test.js.map