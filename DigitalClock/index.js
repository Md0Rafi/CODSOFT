function updateClock() {

    let now = new Date();
    let day = now.getDay();
    let month = now.getMonth();
    let date = now.getDate();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let per = "AM";

    if(hour == 0) {
        hour = 12;
    }
    if(hour > 12) {
        hour = hour - 12;
        per = "PM";
    }

    Number.prototype.pad = function(digits) {
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }
    
    let months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    let weeks = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let ids = [
        "dayName", "month", "dayNum", "year", "hour", "minute", "second", "period"
    ];

    let values = [
        weeks[day], months[month], date.pad(2), year, hour.pad(2), minute.pad(2), second.pad(2), per
    ];

    for(let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}