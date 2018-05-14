var clickTracker = document.querySelector('#clickTracker');
var danicaImg = document.querySelector('#danicaImg');
var clicks = 0;

danicaImg.addEventListener('click', function(e) {
    clicks++;
    clickTracker.innerHTML = clicks;
});