window.onload = function () {
    // Initialize variables
    let seconds = 0;
    let tens = 0;
  
    // Get DOM elements
    const appendTens = document.getElementById('tens');
    const appendSeconds = document.getElementById('seconds');
    const buttonStart = document.getElementById('button-start');
    const buttonStop = document.getElementById('button-stop');
    const buttonReset = document.getElementById('button-reset');
    let interval; // Declare interval variable
  
    // Event listener for start button
    buttonStart.onclick = function () {
      // Clear existing interval
      clearInterval(interval);
  
      // Start new interval
      interval = setInterval(startTimer, 10);
    };
  
    // Event listener for stop button
    buttonStop.onclick = function () {
      // Clear existing interval
      clearInterval(interval);
    };
  
    // Event listener for reset button
    buttonReset.onclick = function () {
      // Clear existing interval
      clearInterval(interval);
  
      // Reset variables
      tens = 0;
      seconds = 0;
  
      // Update DOM elements
      appendTens.innerHTML = '00';
      appendSeconds.innerHTML = '00';
    };
  
    // Timer function
    function startTimer () {
      // Increment tens
      tens++;
  
      // Update tens display
      if (tens <= 9) {
        appendTens.innerHTML = '0' + tens;
      } else {
        appendTens.innerHTML = tens;
      }
  
      // Handle tens reaching 100
      if (tens > 99) {
        console.log('seconds');
        seconds++;
  
        // Update seconds display
        if (seconds <= 9) {
          appendSeconds.innerHTML = '0' + seconds;
        } else {
          appendSeconds.innerHTML = seconds;
        }
  
        // Reset tens
        tens = 0;
        appendTens.innerHTML = '0' + tens;
      }
    }
  };
  