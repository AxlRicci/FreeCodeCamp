// A fuction that takes args id (int), prop, value and modifies the variable collection.
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };

//reqs:
// if prop != 'tracks' and value != '' then update or set the value for that record album's property. (4)
// if prop == 'tracks' and album doesnt have prop 'tracks' create an empty array before adding the new value to the album's corresponding property. (2)
// if prop == 'tracks' and value != '' then push the value onto the end of the album's existing tracks. (3)
// if value == '' then delete the given prop from the album. (1)

function updateRecords(id, prop, value) {
    if (value == '') {
        delete collection[id][prop];
    } else if (prop == 'tracks' && collection[id].hasOwnProperty(prop) == false) {
        var trackList = [value];
        collection[id][prop] = trackList;
    } else if (prop == 'tracks' && value != '') {
        collection[id].tracks.push(value);
    } else if (prop != 'tracks' && value != '') {
        collection[id][prop] = value;
    }
    return collection;
    //console.log(collection);
  }

  updateRecords(1245, "poopstain", "i did this");