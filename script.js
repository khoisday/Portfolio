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

const myText = new SplitType('.name')
let name_tl=gsap.timeline();

name_tl.fromTo('.name:first-child .char', {
    rotationX: -90, // Start rotation around the X-axis from 90 degrees
    transformOrigin: "center center", // Set the transform origin to the center for a 3D effect
}, {
    rotationX: 0, // End rotation around the Y-axis to 180 degrees
    stagger: 0.05,  // Stagger the animations for each element
    delay: 0.6,     // Add a delay before the animations start
    duration: 1.2,    // Set the duration of each rotation
    ease: "power3.out",
});

name_tl.to("#layer2", {
    y: -122,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
},"-=0.8");
name_tl.to("#layer1", {
    y: -244,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
},"<");
name_tl.to("#layer3", {
    y: 122,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
},"<");
name_tl.to("#layer4", {
    y: 244,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
},"<");

name_tl.fromTo("header", {
    opacity: 0,
    y:-50,
}, {
    y:0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
}, "<");




/*
//FILL THE SCREEN WITH HEY, IAM KHOI THEN ZOOM SMALLER THEN ZOOM OUT TO THE CORRECT POSITION
//Zoom in zoom out then those 5 things will appear to the normal at the same time
//Spin something and appear first like vucko then move to the correct place




//PROJECT CAN BE LAYER LIKE
/*
XO
OX
XO
OX
XO
OX
Then it will zoom and fill the screen then after scroll to the end change to another project
 */
