// Setup
function phoneticLookup(val) {
  var result = ""; //this is a null variable defined here and required to be used later in this function
  var lookup = { //loookup is a brand new variable defined here, much like result, except that this object is given properties
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];  //var result now contains the value of lookup[val], with val containing whatever was passed through to the function, in this case "charlie" was passed through the function call 
  return result; 
}

// Change this value to test
console.log (phoneticLookup("charlie"));

    

