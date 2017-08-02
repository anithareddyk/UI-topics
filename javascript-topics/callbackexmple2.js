function fullName(firstName, lastName, callback){
  console.log("My name is " + firstName + " " + lastName);
  callback(lastName);
}

fullName("anitha", "Gandu", function(ln){console.log('Welcome ' + ln);});