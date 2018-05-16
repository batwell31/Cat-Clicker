var danicasClickTracker = document.querySelector('#danicasClickTracker');
var philipsClickTracker = document.querySelector('#philipsClickTracker');
var danicaImg = document.querySelector('#danicaImg');
var philipImg = document.querySelector('#philipImg');
var danicasClicks = 0;
var philipsClicks = 0;

danicaImg.addEventListener('click', function (e) {
    updateDanicasClicks();
});

philipImg.addEventListener('click', function (e) {
    updatePhilipsClicks();
});

function updateDanicasClicks() {
    danicasClicks++;
    danicasClickTracker.innerHTML = danicasClicks;
}

function updatePhilipsClicks() {
    philipsClicks++;
    philipsClickTracker.innerHTML = philipsClicks;
}

var catNames=['Briar-rose', 'Danica', 'Franklin', 'Harmony', 'Philip'];