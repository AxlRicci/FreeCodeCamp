//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    // for people in contacts
    for (var i = 0; i < contacts.length; i++){
        if (name == contacts[i].firstName){
            if (prop == contacts[i].hasOwnProperty(prop)){
                return contacts[i].firstName;
            } else if ({

            }
        }
    }
    // if name is a contact's first name check if prop is a property of contact
    // if name and prop are true return first name
    // if name is not found return "No such contact"
    // if prop is not a property of a countact found to match name return "No such property"

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");