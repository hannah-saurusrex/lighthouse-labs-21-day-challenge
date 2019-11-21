const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
const bakeryB = ['milk', 'butter', 'cream cheese']
const recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
]

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
    let foundA = false;
    let foundB = false;

    for (const recipe of recipes) {
        for (let i = 0; i < recipe.ingredients.length; i++) {

            for (const bakeryAIngredient of bakeryA) {
                if (bakeryAIngredient === recipe.ingredients[i]) {
                    foundA = true;
                }
            }

            for (const bakeryBIngredient of bakeryB) {
                if (bakeryBIngredient === recipe.ingredients[i]) {
                    foundB = true;
                }
            }

            if (foundA && foundB) {
                return recipe.name;
            }
        }
        let foundA = false;
        let foundB = false;
    }
};