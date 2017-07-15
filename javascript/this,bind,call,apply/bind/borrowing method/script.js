var users = {
  data: [
      {name: 'John Smith'},
      {name: 'Ellen Simons'}
  ],

  showName: function () {
      alert(this.data[0].name);
      alert(this.data[1].name);
  }
};


var cars = {
  data: [
    {name: "Mitzubisi Lancer"},
    {name: "Chevrolet Impala"}
  ]
};


cars.showName = users.showName.bind(cars);


cars.showName();
