var clickTracker = document.querySelector('#clickTracker');
var danicaImg = document.querySelector('#danicaImg');
var philipImg = document.querySelector('#philipImg');
var clicks = 0;

danicaImg.addEventListener('click', function(e) {
    updateClicks();
});

philipImg.addEventListener('click', function (e) {
    updateClicks();
});

function updateClicks() {
    clicks++;
    clickTracker.innerHTML = clicks;
}