function getTime(){
    // Get current time
    let currentTime=new Date();
    let hours=currentTime.getHours();
    let minutes= currentTime.getMinutes();
    let formatedTime = hours + ":" + (minutes <10 ? "0" + minutes:minutes);

    document.getElementById("current-time").textContent = " "+ formatedTime;
    
}



setInterval(getTime,1000);
getTime;