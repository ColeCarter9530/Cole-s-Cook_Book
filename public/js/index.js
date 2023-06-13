console.log('hello');

// const recipeForm = document.getElementById('recipeForm')

// const formSubmission = async (e) => {
//     // e.preventDefault();

//     const firstNameValue = document.getElementById('firstNameInput').value;
//     console.log(firstNameValue);

//     const lastNameValue = document.getElementById('lastNameInput').value;
//     console.log(lastNameValue);

//     const dishNameValue = document.getElementById('dishNameInput').value;
//     console.log(dishNameValue);

//     const ingredientsValue = document.getElementById('ingredientsInput').value;
//     console.log(ingredientsValue);

//     const instructionsValue = document.getElementById('instructionsInput').value;
//     console.log(instructionsValue);

//     const emailValue = document.getElementById('emailInput').value;
//     console.log(emailValue);

//     const postValue = await fetch('/recipe', {
//         method: "POST",
//         body: JSON.stringify({
//             firstName: firstNameValue,
//             lastName: lastNameValue,
//             dishName: dishNameValue,
//             ingredients: ingredientsValue,
//             instructions: instructionsValue,
//             email: emailValue
//         }),
//         headers: { "Content-Type": 'application/json'},
//     });
//     if(postValue.ok) {
//         alert("Recipe Logged!");
//     } else {
//         alert('It Broke')
//     }
// }

// recipeForm.addEventListener('submit', formSubmission)