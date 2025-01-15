const ageCalculatorForm = document.getElementById("ageCalculatorForm");
const result = document.getElementById("result");
const ageInput = document.getElementById("birthdate");
// const timeInput = document.getElementById("birthtime");

// set max date to current date
ageInput.setAttribute("max", new Date().toISOString().slice(0, 16));

// click to calculate age
ageCalculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const birthdate = new Date(ageInput.value);
  const currentDate = new Date();

  let ageYears = currentDate.getFullYear() - birthdate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthdate.getMonth();
  let ageDays = currentDate.getDate() - birthdate.getDate();
  let ageHours = currentDate.getHours() - birthdate.getHours();
  let ageMinutes = currentDate.getMinutes() - birthdate.getMinutes();

  if (ageMinutes < 0) {
    ageMinutes += 60;
    ageHours--;
  }

  if (ageHours < 0) {
    ageHours += 24;
    ageDays--;
  }

  if (ageDays < 0) {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    ageDays += previousMonth.getDate();
    ageMonths--;
  }

  if (ageMonths < 0) {
    ageMonths += 12;
    ageYears--;
  }

  result.innerHTML = `<p>Your age is <span  class="text-indigo-500 font-bold">${ageYears}</span> years <span class="text-indigo-500 font-bold">${ageMonths}</span> months <span class="text-indigo-500 font-bold">${ageDays}</span> days <span class="text-indigo-500 font-bold">${ageHours}</span> hours <span class="text-indigo-500 font-bold">${ageMinutes}</span> minutes </p>`;
});
