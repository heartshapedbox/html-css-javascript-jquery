var args;
var lastItem;

function welcomeStudents() {
  args = Array.prototype.slice.call(arguments);
  lastItem = args.pop();
}


welcomeStudents.apply(null, ["student1", "student2", "student3", "student4"]);


var result = "Welcome " + args.join (", ") + ", and " + lastItem + "!";


document.write(result);
