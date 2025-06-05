document.getElementById("calculateBtn").addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // convert cm to meters

  const resultDiv = document.getElementById("result");

  if (!weight || !height || weight <= 0 || height <= 0) {
    resultDiv.innerHTML = "Please enter valid weight and height.";
    resultDiv.style.color = "black";
    return;
  }

  const bmi = weight / (height * height);
  const bmiRounded = bmi.toFixed(2);
  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "orange";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal";
    color = "green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
    color = "red";
  } else {
    category = "Obese";
    color = "red";
  }

  resultDiv.innerHTML = `BMI: ${bmiRounded} <br> Category: ${category}`;
  resultDiv.style.color = color;
});
