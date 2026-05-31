function handleSubmit(event) {
  event.preventDefault();

  const checkbox = document.getElementById('agreeCheck');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');
  const confirmationScreen = document.getElementById('confirmation-screen');
  const form = document.querySelector('form');

  errorMessage.style.display = 'none';
  successMessage.style.display = 'none';

  if (!checkbox.checked) {
    errorMessage.style.display = 'block';
    errorMessage.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  document.getElementById('c-name').textContent = document.querySelector('[name="fullname"]').value;
  document.getElementById('c-age').textContent = document.querySelector('[name="age"]').value;
  document.getElementById('c-gender').textContent = document.querySelector('[name="gender"]').value;
  document.getElementById('c-nationality').textContent = document.querySelector('[name="nationality"]').value;
  document.getElementById('c-school').textContent = document.querySelector('[name="schoolname"]').value;
  document.getElementById('c-grade').textContent = document.querySelector('[name="grade"]').value;
  document.getElementById('c-email').textContent = document.querySelector('[name="email"]').value;
  document.getElementById('c-phone').textContent = document.querySelector('[name="PhoneNumber"]').value;
  document.getElementById('c-address').textContent = document.querySelector('[name="address"]').value;
  document.getElementById('c-guardian').textContent = document.querySelector('[name="guardian"]').value;
  document.getElementById('c-parentphone').textContent = document.querySelector('[name="parentphone"]').value;
  document.getElementById('c-emergency').textContent = document.querySelector('[name="emergency"]').value;
  document.getElementById('c-club').textContent = document.querySelector('[name="club"]').value;
  document.getElementById('c-meetingday').textContent = document.querySelector('[name="meetingday"]').value;
  document.getElementById('c-meetingschool').textContent = document.querySelector('[name="meetingschool"]').value;

  form.style.display = 'none';
  confirmationScreen.style.display = 'block';
  confirmationScreen.scrollIntoView({ behavior: 'smooth' });
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

document.getElementById('goBackBtn').addEventListener('click', function() {
  document.querySelector('form').style.display = 'block';
  document.getElementById('confirmation-screen').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('confirmBtn').addEventListener('click', function() {
  document.getElementById('confirmation-screen').style.display = 'none';
  document.getElementById('success-message').style.display = 'block';
  document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });
});

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }
});