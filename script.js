function updateTime() {
    // Set the time zone to Melbourne, Australia
    var options = { timeZone: 'Australia/Melbourne', hour12: false, hour: 'numeric', minute: 'numeric' };
    var currentTime = new Date().toLocaleTimeString('en-US', options);
    
    document.getElementById("current-time").textContent = " " + currentTime;
}

// Update the time every minute
setInterval(updateTime, 60000);

// Initial call to set the time immediately
updateTime();
