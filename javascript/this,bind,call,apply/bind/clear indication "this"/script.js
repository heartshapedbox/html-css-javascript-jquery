var button = document.querySelector("button");


var users = {
  data: [
      {name: 'John Smith'},
      {name: 'Ellen Simons'}
  ],

   showName: function () {
       alert(this.data[0].name);
       alert(this.data[1].name);
   }
}

button.addEventListener("click", users.showName.bind(users));
