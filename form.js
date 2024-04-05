"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Clear stored weight value on page load
  localStorage.removeItem("weight");

  const weightForm = document.getElementById("weightForm");
  const weightInput = document.getElementById("weight");
  const resultDiv = document.getElementById("result");
  const planetRadios = document.querySelectorAll('input[name="planet"]');
  let weightValue = localStorage.getItem("weight");

  // Initialize weight input value
  if (weightValue) {
    weightInput.value = weightValue;
  }

  // Remember weight input value on change
  weightInput.addEventListener("change", () => {
    weightValue = weightInput.value;
    localStorage.setItem("weight", weightValue);
  });

  // Calculate weight on planet on form submit
  weightForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedPlanet = document.querySelector(
      'input[name="planet"]:checked'
    );
    if (selectedPlanet) {
      const planetName = selectedPlanet.value;
      let gravityMultiplier;
      switch (planetName) {
        case "mercury":
          gravityMultiplier = 0.38;
          break;
        case "venus":
          gravityMultiplier = 0.91;
          break;
        case "mars":
          gravityMultiplier = 0.38;
          break;
        case "jupiter":
          gravityMultiplier = 2.34;
          break;
        default:
          gravityMultiplier = 1;
      }
      const weightOnPlanet = parseFloat(weightValue) * gravityMultiplier;
      resultDiv.innerHTML = `<p>Your weight on ${
        planetName.charAt(0).toUpperCase() + planetName.slice(1)
      } is ${weightOnPlanet.toFixed(2)} kg.</p>`;
    } else {
      resultDiv.innerHTML = "<p>Please select a planet.</p>";
    }
  });

  // Clear stored weight value on reset
  const resetBtn = document.querySelector('button.cur[type="reset"]');
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("weight");
  });
});
