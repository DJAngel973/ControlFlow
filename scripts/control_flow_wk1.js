/*
1.An organization runs a "Domestic Services" program to provide diet plans to its employees and clients,
based on an individual's weight and daily routine. The organization needs to create an authorization-based
code to grant access to individuals according to their organizational roles: Employees,
Enrolled Members for "Dietary Services," and Subscribers.
-If the person is an Employee: They are authorized to have access to the "Dietary Services."
-If the person is an Enrolled Member: They are authorized to have access to the "Dietary Services" AND one-on-one interaction with a dietitian.
-If the person is a Subscriber: They are authorized to have partial access to facilitate the "Dietary Services" ONLY.
-If the person is a Non-Subscriber: They need to enroll or at least subscribe first in order to access this facility.
2.The code must communicate with the user by printing a message indicating whether that person is eligible to access
the facility and which specific types of services they are authorized to use.
*/
let userRole = "employee";
let accessLevel;

switch (userRole) {
    case "employee":
        accessLevel = "Authorized access to Dietary Services.";
        break;
    case "enrolledMember":
        accessLevel = "Authorized access to Dietary Services and one-on-one interaction with a dietitian.";
        break;
    case "subscriber":
        accessLevel = "Partial access to facilitate Dietary Services only.";
        break;
    default:
        accessLevel = "Non-Subscriber, you need to register first to gain access.";
}

console.log("Access Level: ", accessLevel);