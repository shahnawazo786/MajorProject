document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const role = document.getElementById('role').value;

  if (role === 'student') {
    window.location.href = 'student_registration.html';
  } else if (role === 'teacher') {
    window.location.href = 'teacher_login.html';
  } else {
    alert('Please select a valid role!');
  }
});