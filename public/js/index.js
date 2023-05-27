console.log('hello');

const recipeForm = document.getElementById('recipeForm')

const formSubmission = (e) => {
    e.preventDefault();

    const firstNameValue = document.getElementById('firstNameInput').value;
    console.log(firstNameValue);
    const lastNameValue = document.getElementById('lastNameInput').value;
    console.log(lastNameValue);
    const dishNameValue = document.getElementById('dishNameInput').value;
    console.log(dishNameValue);
    const ingredientsValue = document.getElementById('ingredientsInput').value;
    console.log(ingredientsValue);
    const instructionsValue = document.getElementById('instructionsInput').value;
    console.log(instructionsValue);
    const emailValue = document.getElementById('emailInput').value;
    console.log(emailValue);
}

recipeForm.addEventListener('submit', formSubmission)