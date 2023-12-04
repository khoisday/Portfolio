function updateTime() {
    // Set the time zone to Melbourne, Australia
    var options = { timeZone: 'Australia/Melbourne', hour12: false, hour: 'numeric', minute: 'numeric' };
    var currentTime = new Date().toLocaleTimeString('en-US', options);

    // Split the time into hours and minutes
    var [hours, minutes] = currentTime.split(":");

    // Display the time and make the colon blink
    document.getElementById("current-time").innerHTML = " " + hours + '<span class="blink">:</span>' + minutes;
}

// Update the time every minute
setInterval(updateTime, 60000);

// Initial call to set the time immediately
updateTime();
