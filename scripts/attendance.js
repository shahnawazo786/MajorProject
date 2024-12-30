document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('liveFeed');
    const downloadButton = document.getElementById('downloadCsv');
    const attendanceList = document.getElementById('attendanceList');
  
    // Simulate live camera feed
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing webcam:', error);
        alert('Unable to access camera.');
      });
  
    // Simulated attendance data
    const students = [
      { name: 'Alice', status: 'Present' },
      { name: 'Bob', status: 'Absent' },
      { name: 'Charlie', status: 'Present' },
      { name: 'Dave', status: 'Absent' }
    ];
  
    // Populate the attendance list
    students.forEach(student => {
      const listItem = document.createElement('li');
      listItem.textContent = `${student.name}: ${student.status}`;
      attendanceList.appendChild(listItem);
    });
  
    // Function to generate and download CSV
    const downloadCsv = () => {
      let csvContent = 'Name,Status\n';
      students.forEach(student => {
        csvContent += `${student.name},${student.status}\n`;
      });
  
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'attendance.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  
    // Attach the download function to the button
    downloadButton.addEventListener('click', downloadCsv);
  });
  