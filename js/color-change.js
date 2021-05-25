var watchImg = document.getElementById('color-smart-watch')

var blackBox = document.getElementById('black-watch-box');

blackBox.addEventListener('click', function(){
    console.log('Black boxed clicked');
    watchImg.src = 'images/black-smart-watch.png';
});

var redBox = document.getElementById('red-watch-box');

redBox.addEventListener('click', function(){
    console.log('Red Boxed clicked');
    watchImg.src = 'images/red-smart-watch.png';
});

var purpleBox = document.getElementById('purple-watch-box');

purpleBox.addEventListener('click', function(){
    console.log('purple Boxed clicked');
    watchImg.src = 'images/purple-smart-watch.png';
});

var burgandyBox = document.getElementById('burgandy-watch-box');

burgandyBox.addEventListener('click', function(){
    console.log('Burgandy Boxed clicked');
    watchImg.src = 'images/burgandy-smart-watch.png';
});

var pinkBox = document.getElementById('pink-watch-box');

pinkBox.addEventListener('click', function(){
    console.log('Pink Boxed clicked');
    watchImg.src = 'images/pink-smart-watch.png';
});

var timer = document.getElementById('time');

timer.addEventListener('click', function() {
    console.log('Time Button Clicked');
    var currentDate = new Date();
    var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    //timer.style.visibility = 'visible';
    document.getElementById('time-text').innerHTML = time;
   // document.getElementById('heart-rate-num').style.visibility = 'hidden';
});

var heartRate = document.getElementById('heart-rate');

heartRate.addEventListener('click', function() {
    console.log('Heart Rate Clicked');
    var heartRateNum = 78;
    document.getElementById('heart-rate-num').innerHTML = heartRateNum;
    //document.getElementById('time-text').style.visibility = 'hidden';
});

