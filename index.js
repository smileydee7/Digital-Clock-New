setInterval(() => {
    let hours = document.getElementById('hours');
    let mins = document.getElementById('mins');
    let secs = document.getElementById('secs');
    let ampm = document.getElementById('ampm');

    // let hh = document.getElementById('hh');
    //  let mm = document.getElementById('mm');
    //  let ss = document.getElementById('ss');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? 'PM' : 'AM';

    //convert 24 hours to 12 hours
    if (h > 12) {
        h = h - 12;
    }
    //add 0 before single digit
    // h = h < 10 ? '0' + h : h;
    // m = m < 10 ? '0' + m : m;
    //s = s < 10 ? '0' + s : s;

    hours.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;
    ampm.innerHTML = am;
})