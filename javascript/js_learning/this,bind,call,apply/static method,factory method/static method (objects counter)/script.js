// Add to constructor "Article":
// Counting total of created objects.
// Keeping the date of the last created object.


function Article() {
  Article.count++;
  this.created = new Date();
  Article.last = this.created;
}


function removeArticle() {
  Article.count--;
  this.created = new Date();
  Article.last = this.created;
}

Article.count = 0;


Article.showStats = function() {
  return alert("Total counts: " + this.count + "\n" + "Last date: " + this.last);
}


new Article();
new Article();
Article.showStats(); // Total counts: 2
// Last date: Wed Aug 09 2017 14:30:28 GMT+0300 (EEST)

new Article();
Article.showStats(); // Total counts: 3
// Last date: Wed Aug 09 2017 14:30:29 GMT+0300 (EEST)

new removeArticle();
Article.showStats(); // Total counts: 2
// Last date: Wed Aug 09 2017 14:30:30 GMT+0300 (EEST)
