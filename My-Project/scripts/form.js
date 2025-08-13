const form = document.getElementById('feedbackForm');
  const counterDisplay = document.getElementById('counter');
  const thankYouMessage = document.getElementById('thank-you');

  // Load submission count from localStorage
  let submissionCount = localStorage.getItem('submissionCount');
  if (!submissionCount) {
    submissionCount = 0;
  } else {
    submissionCount = parseInt(submissionCount);
  }
  
  counterDisplay.textContent = `Submissions: ${submissionCount}`;

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page refresh

    // Increase count and save to localStorage
    submissionCount++;
    localStorage.setItem('submissionCount', submissionCount);

    // Update display
    counterDisplay.textContent = `Submissions: ${submissionCount}`;

    // Show thank you message
    thankYouMessage.style.display = 'block';
    setTimeout(() => {
      thankYouMessage.style.display = 'none';
    }, 3000);

    // Reset form fields
    form.reset();
  });