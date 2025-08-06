 // Get the current count from localStorage
    let count = localStorage.getItem("reviewCount");

    // If it's not set yet, start at 0
    if (!count) {
      count = 0;
    }

    // Convert to number, increment, and store back
    count = parseInt(count) + 1;
    localStorage.setItem("reviewCount", count);

    // Display the count
    document.getElementById("reviewCount").textContent = count;