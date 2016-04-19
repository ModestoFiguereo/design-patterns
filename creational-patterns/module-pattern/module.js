var counterModule = (function () {
  var counter = 0;

  return {
    increment: function increment() {
      ++counter;
    },
    decrement: function decrement() {
      if (counter >= 0) {
        --counter;
      }
    },
    reset: function reset() {
      counter = 0;
    },
    getAmount: function getAmount() {
      return counter;
    }
  }
}());

console.log(counterModule.getAmount());
counterModule.increment();
counterModule.increment();
counterModule.increment();
console.log(counterModule.getAmount());
counterModule.decrement();
console.log(counterModule.getAmount());
counterModule.reset();
console.log(counterModule.getAmount());
