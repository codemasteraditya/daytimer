function updateCountdown() {
    var now = new Date(); // Get current date and time
    var options = { timeZone: "Asia/Kolkata" };
    var indianDate = now.toLocaleString("en-US", options); // Convert to Indian time

    var endOfDay = new Date(indianDate);
    endOfDay.setHours(23, 59, 59); // Set end of day time to 23:59:59 in Indian time

    var timeRemaining = endOfDay - now; // Calculate time remaining in milliseconds

    var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    var seconds = Math.floor((timeRemaining / 1000) % 60);
    var milliseconds = Math.floor(timeRemaining % 1000);

    // Display the remaining time
    document.getElementById('countdown').textContent = hours + 'h ' + minutes + 'm ' + seconds + 's ' + milliseconds + 'ms';

    setTimeout(updateCountdown, 10); // Update the countdown every 10 milliseconds
}

updateCountdown(); // Start the countdown
