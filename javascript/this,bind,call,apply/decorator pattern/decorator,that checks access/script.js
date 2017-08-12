// decorator, that checks access

// function returns status "true" if guest have an access
function isAdmin() {
  return true + ". You have an access! You are an administrator!";
}

// function returns status "false" if guest do not have an access
function isNotAdmin() {
  return false + ". You do not have an access! You are not an administrator!";
}

// decorator
function checkAccess(fn) {
  return function() {
    if(isAdmin()) {
      return console.log("Status: " + fn.apply(this, arguments));
    } else {
      return console.log("Status: " + fn.apply(this, arguments));
    }
  }
}

// guest function
function guest(status) {
  if (status == "isAdmin") {
    return status = isAdmin();
  } else {
    return status = isNotAdmin();
  }
}

// wrap the decorator
guest = checkAccess(guest);


guest("isAdmin"); // Status: true. You have an access! You are an administrator!
guest("isUser"); // Status: false. You do not have an access! You are not an administrator!
guest("isQA"); // Status: false. You do not have an access! You are not an administrator!
