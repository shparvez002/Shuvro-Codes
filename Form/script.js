function handleSubmit(event) {
  event.preventDefault();

  const checkbox = document.getElementById('agreeCheck');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  errorMessage.style.display = 'none';
  successMessage.style.display = 'none';

  if (!checkbox.checked) {
    errorMessage.style.display = 'block';
    errorMessage.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  successMessage.style.display = 'block';
  successMessage.scrollIntoView({ behavior: 'smooth' });
}

const reasonBox = document.getElementById("reason");
const counter = document.getElementById("counter");

reasonBox.addEventListener("input", function(){
  counter.textContent = reasonBox.value.length + "/500 characters";
});

const photoInput = document.getElementById("photoInput");
const preview = document.getElementById("preview");

photoInput.addEventListener("change", function(){
const file = this.files[0];

if (file) {
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";
}
});

const clubSelect = document.querySelector('[name="club"]');

const baseFee = document.getElementById("baseFee");
const schoolFee = document.getElementById("schoolFee");
const materialFee = document.getElementById("materialFee");
const totalFee = document.getElementById("totalFee");

const fees = {
  "Chess Club": { base: 1000, school: 200, material: 800 },
  "Art Club": { base: 500, school: 50, material: 500 },
  "Science Club": { base: 1000, school: 50, material: 700 },
  "Math Club": { base: 1000, school: 0, material: 0 },
  "Sports Club": { base: 1000, school: 300, material: 1000 },
  "Community Service Club": { base: 0, school: 0, material: 0 }
};

clubSelect.addEventListener("change", function () {
  const f = fees[this.value];

  if (!f) {
    baseFee.textContent = "-";
    schoolFee.textContent = "-";
    materialFee.textContent = "-";
    totalFee.textContent = "-";
    return;
  }

  const total = f.base + f.school + f.material;

  baseFee.textContent = f.base + " Tk";
  schoolFee.textContent = f.school + " Tk";
  materialFee.textContent = f.material + " Tk";
  totalFee.textContent = total + " Tk";
});