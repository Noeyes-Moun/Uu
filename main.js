
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  if (!weight || !height) return;
  const bmi = weight / (height * height);
  let category = '';
  if (bmi < 18.5) category = 'Kekurangan berat badan';
  else if (bmi < 25) category = 'Normal';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obesitas';
  document.getElementById('bmiResult').innerText = `BMI Anda: ${bmi.toFixed(2)} (${category})`;
}
