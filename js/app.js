let formEl = document.querySelector(".bmi_form");
let TitleEl = document.querySelector(".card-heading");
let bmiNameEl = document.querySelector(".bmi_name");
let bmiHeight = document.querySelector(".bmi_height");
let bmiWeight = document.querySelector(".bmi_weight");

formEl.addEventListener("submit", (e) => {
	e.preventDefault();
	let name = bmiNameEl.value;
	let bmiName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	let weight = bmiWeight.value / 100;
	let height = bmiHeight.value;
	let BMI = (weight / height ** 2).toFixed(1);

	if (BMI <= 18.5) {
		TitleEl.textContent = `${bmiName} siz ozg'insiz!`;
	} else if (BMI > 18.5 && BMI < 24.9) {
		TitleEl.textContent = `${bmiName} siz normanlisiz!`;
	} else if (BMI > 25 && BMI < 29.9) {
		TitleEl.textContent = `${bmiName} siz semizsiz!`;
	} else if (BMI < 123456789123456789) {
		TitleEl.textContent = `${bmiName} siz o'ta semizsiz!`;
	} else {
		TitleEl.textContent = "Hech qanday narsa kiritilmagan 🤦‍♂️!";
	}
	bmiHeight.value = "";
	bmiNameEl.value = "";
	bmiWeight.value = "";
});
