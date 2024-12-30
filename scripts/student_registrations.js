document.addEventListener('DOMContentLoaded', () => {
    const liveCamera = document.getElementById('liveCamera');
    const recordButton = document.getElementById('recordButton');
  
    // Start live camera feed
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        liveCamera.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
        alert('Camera access is required for registration.');
      });
  
    // Simulate recording feature
    recordButton.addEventListener('click', () => {
      alert('Recording started! Perform the poses shown in the guide.');
      // Implement recording logic here if needed
    });
  });
  