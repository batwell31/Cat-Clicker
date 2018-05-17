var imgDiv = document.querySelector('#imgDiv'),
    nameDiv = document.querySelector('#nameDiv'),
    clickDiv = document.querySelector('#clickDiv'),
    formDiv = document.querySelector('#formDiv');

function makeSelection() {
    for (var i = 0; i < document.myCats.cat.length; i++) {
        if (document.myCats.cat[i].checked) {
            
            // clears the content so only one cat can be visable at a time
            nameDiv.innerHTML = '';
            imgDiv.innerHTML = '';
            clickDiv.innerHTML = '';

            // variable to keep track and increment clicks for Total Clicks in the HTML
            var catClicks = 0;

            //this is the cat were on...
            var catName = document.myCats.cat[i].value;

            var h2 = document.createElement('H2');
            h2.className = 'name center';
            h2.textContent = catName;
            nameDiv.appendChild(h2);

            // setting all the alt texts for each cat in order in an array
            var altText = ['a picture of briar-rose climbing up my body to see me', 'a picture of danica sitting on my blanket on my couch', 'a picture of franklin on the back patio at my aunts house', 'a picture of harmony licking water out of my fiances bathroom faucet', 'a picture of my old roomates cat taking a nap on my computer desk'];

            var img = document.createElement('IMG');
            img.setAttribute("id", "cat-img");
            img.className = 'img-responsive catDiv';
            // sets a alt tag to the img from the array I have made.
            img.alt = altText[i];
            // sets a src attribute to the img
            img.src = 'img/' + catName + '.jpg';
            imgDiv.appendChild(img);

            var paragraph = document.createElement('P');
            paragraph.className = "click";
            paragraph.textContent = "Total Clicks: ";
            //create span inside the paragraph
            var span = document.createElement('SPAN');
            span.setAttribute("id", "clickTracker");
            span.textContent = '';
            span.className = "clickFont"
            // appends the span/paragraph elements to the clickDiv element
            paragraph.appendChild(span);
            clickDiv.appendChild(paragraph);

            var catClickTracker = document.querySelector('#clickTracker');
            //sets an eventListener to the img you have selected
            img.addEventListener('click', function (e) {
                //increments cat clicks
                catClicks++;
                //changes the number of clicks to the html upon click
                catClickTracker.innerHTML = catClicks;
            });
        }
    }
}