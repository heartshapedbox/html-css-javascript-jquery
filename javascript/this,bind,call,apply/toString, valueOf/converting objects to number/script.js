var room = {
  name: "Lounge room",
  number: 13,

  toString: function() {
    return this.name;
  },

  valueOf: function() {
    return this.number;
  }
};


alert(room);
alert("Room number: " +room);
