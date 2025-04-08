// NOTE: REFERENCED LINE 1 TO LINE 10 OF SCRIPT.JS FROM INTERNET SOURCES 
document.getElementById("baseSelector").addEventListener("submit", function (e) {
    e.preventDefault();

    // these variables are used to get the values of the selected base, fruits, boosters, sweetness, and notes, so that we can further use them in the order summary 
    const base = document.querySelector('input[name="base"]:checked')?.value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(el => el.value);
    const boosters = Array.from(document.querySelectorAll('input[name="boosters"]:checked')).map(el => el.value);
    const sweetness = document.getElementById("sweetness").value;
    const notes = document.getElementById("notes").value;

    // MAKING Sure that the user gets atleast one fruit ingredient in their smoothie and a base ingredient
    // if not, we will alert the user to select at least one fruit and a base ingredient
    if (!base || !fruits.length) {
        alert("Please select at least a base and one fruit.");
        return;
    }

    //Now, creating a smoothie object to store the smoothie details , all the ingredients that the user has selected + the notes and the price of the smoothie 
    const smoothie = {
        name: `${base} Smoothie`,
        base: base,
        fruits: fruits,
        boosters: boosters,
        sweetness: sweetness,
        notes: notes,
    };

    //A custom function to display the smoothie result to the customer with full price and image along with details.
    displaySmoothie(smoothie);
});

//NOW, creating the displaySmoothie function that we have called above to display the smoothie details.
function displaySmoothie(smoothie) {
    // Removing the hidden class from the order display section to show the smoothie details
    document.querySelector(".finalSmoothie").classList.remove("hidden");

    // showing the smoothie details in the display section 
    document.querySelector(".smoothieDetails h3").textContent = smoothie.name; //adding the name of the smoothie 

    //creating a variable with the smoothie name and the fruit that the customer has choosen as those two are the defaults 
    let description = `${smoothie.name} with ${smoothie.fruits.join(", ")}`;

    //Now , if the customer has added any boosters, we will add them to the description of the smoothie
    if (smoothie.boosters.length) {
        description += ` and Boosters: ${smoothie.boosters.join(", ")}`;
    }
    description += `<br><strong>Sugar Rush Level:</strong> ${smoothie.sweetness}/10`;
    
    //Same goes for the notes. We will add them to the description of the smoothie if the customer has added any notes.
    if (smoothie.notes) {
        description += `<br><strong>Notes:</strong> ${smoothie.notes}`;
    }

    document.querySelector(".smoothieDescription").innerHTML = description;
    
    // Display corresponding image based on fruits selected
    displaySmoothieImage(smoothie.fruits);
}

// Creating another js object to store paths of images of fruits that are used in smoothies, so that we can display them in result section.
const fruitImages = {
    "Strawberry": "/images/Strawberry.jpeg", 
    "Banana": "/images/Banana.jpeg",
    "Mango": "/images/Mango.jpeg",
    "Blueberry": "/images/Blueberry.jpeg",
    "Apple": "/images/Apple.jpeg"
};

//At last , creating the displaySmoothieImage function to display the image of the smoothie based on the fruits selected by the customer.
function displaySmoothieImage(fruits) {

    const smoothieImageElement = document.getElementById("smoothiePhoto");
    if (fruits.length > 0) {
        // Combine images of selected fruits 
        imageSrc = fruitImages[fruits[0]]; // gives image number based on the fruit selected 
    }

    // Set the image source
    smoothieImageElement.src = imageSrc;
}
