// Objects. 
const myTestObject = {
    elephant: { name: 'elefant', picture: '/img/elephant.jpg', description: 'Elefanter er en familie i klassen pattedyr med traditionelt to nulevende arter, den afrikanske og den asiatiske. Ny forskning tyder dog på, at den afrikanske elefant skal opdeles, så der derfor i alt findes tre arter' },
    tiger: { name: 'tiger', picture: '/img/standard_tiger.jpg', description: ' Det mest genkendelige træk ved tigeren er pelsen med mørke tværstriber på orange bund. Tigre er superrovdyr, der især lever af hovdyr såsom hjorter.' },
    spider: { name: 'edderkop', picture: '/img/Brachypelma_smithi.jpg', description: 'Edderkopper er karakteriseret ved at have en todelt krop, otte ben, spindevorter og giftkirtler. De fleste edderkopper slår deres bytte ihjel ved hjælp af gift, og bortset fra en enkelt planteæder er de alle sammen rovdyr.' },
    koala: { name: 'koala', picture: '/img/_WW236934.jpg', description: 'big fellowKoalaen er et pungdyr, der lever i Australien. Koalaen er tidligere fejlagtigt blevet betegnet som "koalabjørn" eller "pungbjørn" da man, grundet dens ydre, førhen troede, den var en bjørn. Dette er dog ikke korrekt; koalaen er ikke en bjørneart men er pungdyr beslægtet med bl.a. kænguruen' },
    ferret: { name: 'fritte', picture: '/img/ferret-table.jpg', description: 'Fritten er den domesticerede form af en ilder. Den domesticerede form anvendes fortsat til kaninjagt nogle steder i verden, men anvendes i dag primært som kæledyr. Fritten har været et medlem af den menneskelige husstand i et par tusinde år.' },
    cat: { name: 'kat', picture: '/img/_H2A0653-1200px.jpg', description: 'Kattens anatomi ligner andre kattedyr: stærke, fleksible kroppe, hurtige reflekser, skarpe klør og tænder, der er velegnede til at dræbe byttet. Katte bruger deres gode hørelse og evnen til at se i næsten totalt mørke til at jage i tusmørke. Katte kan høre lyde, der er både dybere og højere end hvad mennesker kan høre. Det skyldes, at kattes hørelse er tilpasset deres naturlige bytte, der ofte er gnavere som mus. Når katte kommunikerer, bruger de miaven, spinden, hvæsen, dufte og kropssprog.[4]' }
};

let galleryCardClass = 'gallerycard';

// The app lives here
const myApp = document.getElementById('app');


buildGallery()

// Funktionen bliver lavet med et 'for in' loop inden i.
function buildGallery() {
    for (let myIndex in myTestObject) {
        let myName = myTestObject[myIndex].name;
        let myUrl = myTestObject[myIndex].picture;
        let myDescription = myTestObject[myIndex].description;

       buildCard(myName, myUrl, myDescription) 
    }
}

function buildCard(myHeadline, myUrl, myDescription, clearParent) {
    if (clearParent) {
        myApp.innerHTML = ' ';
    }
    
    // Variabler laves
    const myCard = document.createElement('figure');
    const cardHeadline = document.createElement('h2');
    const cardImage = document.createElement('img');
    const cardDescription = document.createElement('p');
    // console.log(cardImage);

    // Variabler får attributer på og der bliver skabt nye variabler
    cardHeadline.innerText = myHeadline;
    cardImage.src = myUrl;
    cardDescription.innerText = myDescription;

    // Overskrift, billede og beskrivelse bliver hængt til vores figure 'myCard'. 
    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);

    myCard.classList.add(galleryCardClass);

    // Det hele bliver hængt sammen til vores sektion som har id'et myApp.
    myApp.appendChild(myCard);
}








