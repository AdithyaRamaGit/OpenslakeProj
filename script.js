
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}


const doctors = [
  { name: "Dr. John Doe", specialization: "Cardiology", hospital: "City Hospital" },
  { name: "Dr. Jane Smith", specialization: "Orthopedics", hospital: "City Hospital" },
  { name: "Dr. Lee Chen", specialization: "Pediatrics", hospital: "Downtown Clinic" }
];


document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const specialization = document.getElementById('specialization').value.toLowerCase();
  const hospital = document.getElementById('hospital').value.toLowerCase();

  const results = doctors.filter(doc =>
    (specialization === '' || doc.specialization.toLowerCase().includes(specialization)) &&
    (hospital === '' || doc.hospital.toLowerCase().includes(hospital))
  );

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = results.length
    ? results.map(doc => `<p>👨‍⚕️ ${doc.name} - ${doc.specialization} at ${doc.hospital}</p>`).join('')
    : '<p>No doctors found matching your criteria.</p>';
});

// Handle appointment booking
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const patientName = document.getElementById('patientName').value;
  const doctorName = document.getElementById('doctorName').value;
  const date = document.getElementById('appointmentDate').value;
  const time = document.getElementById('appointmentTime').value;

  document.getElementById('confirmation').innerHTML = `
    <p>✅ Appointment Confirmed!</p>
    <p>Patient: ${patientName}</p>
    <p>Doctor: ${doctorName}</p>
    <p>Date: ${date}</p>
    <p>Time: ${time}</p>
  `;

  document.getElementById('appointmentForm').reset();
});
