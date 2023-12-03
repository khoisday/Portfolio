function updateTime() {
    // Set the time zone to Melbourne, Australia
    var options = { timeZone: 'Australia/Melbourne', hour12: false };
    var currentTime = new Date().toLocaleTimeString('en-US', options);
    
    document.getElementById("current-time").textContent = " " + currentTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to set the time immediately
updateTime();
