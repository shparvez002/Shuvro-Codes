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

// ---- CONFIRM BTN → show ID card screen ----
document.getElementById('confirmBtn').addEventListener('click', function() {
  const club = document.querySelector('[name="club"]').value;
  const name = document.querySelector('[name="fullname"]').value;
  const grade = document.querySelector('[name="grade"]').value;
  const school = document.querySelector('[name="schoolname"]').value;
  const meetingday = document.querySelector('[name="meetingday"]').value;
  const meetingschool = document.querySelector('[name="meetingschool"]').value;
  const emergency = document.querySelector('[name="emergency"]').value;
  const email = document.querySelector('[name="email"]').value;
  const photoSrc = document.getElementById('preview').src;

  const clubLogos = {
    "Chess Club": "♟️",
    "Art Club": "🎨",
    "Science Club": "🔬",
    "Math Club": "📐",
    "Sports Club": "⚽",
    "Community Service Club": "🤝"
  };

  const clubColors = {
    "Chess Club": "linear-gradient(135deg, #1a1a1a, #b8860b)",
    "Art Club": "linear-gradient(135deg, #880e4f, #e91e63)",
    "Science Club": "linear-gradient(135deg, #1b5e20, #43a047)",
    "Math Club": "linear-gradient(135deg, #e65100, #fb8c00)",
    "Sports Club": "linear-gradient(135deg, #b71c1c, #e53935)",
    "Community Service Club": "linear-gradient(135deg, #1a237e, #1565c0)"
  };

  const randomId = 'DEAOS-' + Math.floor(100000000 + Math.random() * 900000000);

  const now = new Date();
  const issueDate = now.toLocaleDateString('en-GB');
  const expiry = new Date(now);
  expiry.setFullYear(expiry.getFullYear() + 1);
  const expiryDate = expiry.toLocaleDateString('en-GB');

  const color = clubColors[club] || "linear-gradient(135deg, #1a237e, #1565c0)";
  document.getElementById('card-front').style.background = color;
  document.getElementById('card-back').style.background = color;
  document.getElementById('card-back-header').style.background = 'rgba(0,0,0,0.2)';
  document.getElementById('card-header-strip').style.background = 'rgba(0,0,0,0.2)';

  document.getElementById('card-logo').textContent = clubLogos[club] || "🏫";
  document.getElementById('card-club-name-display').textContent = club;
  document.getElementById('card-name-display').textContent = name;
  document.getElementById('card-grade-display').textContent = grade;
  document.getElementById('card-school-display').textContent = school;
  document.getElementById('card-id-display').textContent = randomId;
  document.getElementById('card-issue-val').textContent = issueDate;
  document.getElementById('card-expiry-val').textContent = expiryDate;
  document.getElementById('card-club-back').textContent = club;
  document.getElementById('card-meetingday').textContent = meetingday;
  document.getElementById('card-meetingschool').textContent = meetingschool;
  document.getElementById('card-emergency').textContent = emergency;
  document.getElementById('card-email').textContent = email;

  if (photoSrc && photoSrc !== window.location.href) {
    document.getElementById('card-photo').src = photoSrc;
    document.getElementById('card-photo').style.display = 'block';
  } else {
    document.getElementById('card-photo').style.display = 'none';
  }

  document.getElementById('confirmation-screen').style.display = 'none';
  document.getElementById('idcard-screen').style.display = 'block';
  document.getElementById('idcard-screen').scrollIntoView({ behavior: 'smooth' });
});

// ---- FLIP CARD ----
document.getElementById('card-flipper').addEventListener('click', function() {
  this.classList.toggle('flipped');
});

// ---- GO BACK TO CONFIRMATION ----
document.getElementById('backToConfirmBtn').addEventListener('click', function() {
  document.getElementById('idcard-screen').style.display = 'none';
  document.getElementById('confirmation-screen').style.display = 'block';
  document.getElementById('confirmation-screen').scrollIntoView({ behavior: 'smooth' });
});

// ---- FINISH REGISTRATION ----
document.getElementById('finishBtn').addEventListener('click', function() {
  document.getElementById('idcard-screen').style.display = 'none';
  document.getElementById('success-message').style.display = 'block';
  document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });
});

// ---- DOWNLOAD ID CARD ----
document.getElementById('downloadBtn').addEventListener('click', function() {
  const cardFront = document.getElementById('card-front');
  html2canvas(cardFront).then(function(canvas) {
    const link = document.createElement('a');
    link.download = 'DEAOS-ID-Card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});

// ---- PRINT ID CARD ----
document.getElementById('printBtn').addEventListener('click', function() {
  const cardFront = document.getElementById('card-front');
  html2canvas(cardFront).then(function(canvas) {
    const win = window.open('');
    win.document.write('<img src="' + canvas.toDataURL() + '" style="width:100%">');
    win.document.close();
    win.print();
  });
});

// ---- THEME TOGGLE ----
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }
});