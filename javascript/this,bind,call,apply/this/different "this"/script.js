//If the same function runs in contex of different objects, then function gets different "this":


var teacher = {
  name: "Teacher"
};

var students = {
  name: "Students"
};


teacher.a = fn;
students.b = fn;

function fn() {
  //first time "this" = teacher; second time = students;
  alert("Hello, " + this.name + "!");
}

teacher.a(); // Hello, Teacher!
students.b(); // Hello, Students!
