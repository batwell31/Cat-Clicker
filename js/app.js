//re-usable function for a querySelector - given to me by my mentor 
function qs(varName, selector) {
    varName = document.querySelector(selector);
    return varName;
}

// an array of clicks so that each cat can have their own clicks!
let clicks = [0, 0, 0, 0, 0];

// this function gets called when you press submit on the browser
function makeSelection() {
    const length = document.myCats.cat.length;    
    
    for (let i = 0; i < length; i++) {
        const checked = document.myCats.cat[i].checked;

        if (checked) {
            
            // targtes the div elements and clears out the innerHTML
            qs(nameDiv, '#nameDiv').innerHTML = '';
            qs(imgDiv, '#imgDiv').innerHTML = '';
            qs(clickDiv, '#clickDiv').innerHTML = '';

            //this is the cat were on
            const catName = document.myCats.cat[i].value;

            let h2 = document.createElement('h2');
            h2.className = 'name center';
            h2.textContent = catName;
            imgDiv.appendChild(h2);

            // setting all the alt texts for each cat in order in an array
            const altText = ['a picture of briar-rose climbing up my body to see me', 'a picture of danica sitting on my blanket on my couch', 'a picture of franklin on the back patio at my aunts house', 'a picture of harmony licking water out of my fiances bathroom faucet', 'a picture of my old roomates cat taking a nap on my computer desk'];

            let img = document.createElement('img');
            img.setAttribute("id", "cat-img");
            img.className = 'img-responsive catDiv';
            // sets a alt tag to the img from the array I have made.
            img.alt = altText[i];
            // sets a src attribute to the img
            img.src = 'img/' + catName + '.jpg';
            imgDiv.appendChild(img);

            let paragraph = document.createElement('p');
            paragraph.className = "click";
            paragraph.textContent = "Total Clicks: ";
            let span = document.createElement('span');
            span.setAttribute("id", "clickTracker");
            span.innerHTML = clicks[i];
            span.className = "clickFont";
            paragraph.appendChild(span);
            clickDiv.appendChild(paragraph);

            // sets an eventListener to the img you have selected
            img.addEventListener('click', function() {
                // increments cat clicks for the cat were on
                clicks[i]++;
                qs(clickTracker, '#clickTracker').innerHTML = clicks[i];
            });
        }
    }
}