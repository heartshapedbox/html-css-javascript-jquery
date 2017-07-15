var ladder = {
  step: 0,

  stepUp: function() {
    this.step++;
    return this;
  },

  stepDown: function() {
    this.step--;
    return this;
  },

  showStep: function() {
    alert("Current step: " + this.step);
    return this;
  }
};


ladder.stepUp().stepUp().stepUp().stepDown().showStep(); // current step: 2
