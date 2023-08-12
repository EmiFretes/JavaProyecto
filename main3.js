document.addEventListener("DOMContentLoaded", function() {
    const counterDisplay = document.getElementById("counterDisplay");
    const incrementButton = document.getElementById("incrementButton");
    const resetButton = document.getElementById("resetButton");
  
    
    let counter = parseInt(localStorage.getItem("counter"));
    counterDisplay.textContent = counter;
  
    function saveCounter() {
      localStorage.setItem("counter", counter);
    }
  
    incrementButton.addEventListener("click", (evt) => {
      counter++;
      counterDisplay.textContent = counter;
      saveCounter();
    });
  
    resetButton.addEventListener("click", (evt) => {
      counter = 0;
      counterDisplay.textContent = counter;
      saveCounter();
    });
  });