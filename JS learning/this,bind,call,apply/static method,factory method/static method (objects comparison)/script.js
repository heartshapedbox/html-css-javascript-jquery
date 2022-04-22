function Journal(date) {
  this.date = date;
  this.dateFormat = function(date) {
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  };

  this.getTitle = function() {
    return "Journal release: " + this.dateFormat(this.date);
  };
}

// if journalA > journalB, than fn returns value > 0, otherwise < 0
Journal.compare = function(journalA, journalB) {
  return journalA.date - journalB.date;
}


function getMin(journals) {
  var min = 0;
  for (var i = 0; i < journals.length; i++) {
    if (Journal.compare(journals[min], journals[i]) > 0) {
      min = i;
    }
  }
  return journals[min];
}


var journals = [
new Journal(new Date(2017, 11, 3)),
new Journal(new Date(2017, 7, 13)),
new Journal(new Date(2017, 4, 8))
];

console.log(getMin(journals).getTitle()); // Journal release: 8/4/2017
