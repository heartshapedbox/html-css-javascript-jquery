var ladder = {
  step: 0,

  stepUp: function() {
    this.step++;
  },

  stepDown: function() {
    this.step--;
  },

  showStep: function() {
    alert("Current step: " + this.step);
  }
};


ladder.stepUp();
ladder.stepUp();
ladder.stepUp();
ladder.stepDown();
ladder.showStep(); // Current step: 2
