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
    if (!base || fruits.length === 0) {
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
        price: calculatePrice(base, fruits, boosters) // Pricing logic
    };

    //A custom function to display the smoothie result to the customer with full price and image along with details.
    displaySmoothie(smoothie);
});

