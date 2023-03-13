/// <reference path="./global.d.ts" />
// @ts-check

export const cookingStatus = (remainingTime) => {
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else if (remainingTime) {
    return 'Not done, please wait.';
  } else {
    return 'You forgot to set the timer.';
  }
}

export const preparationTime = (layers, timePerLayer) => {
  if (timePerLayer) {
    return layers.length * timePerLayer;
  } else {
    return layers.length * 2;
  }
}

export const quantities = (layers) => {
  const quantities = {
    sauce: 0,
    noodles: 0,
  };

  for (const layer of layers) {
    if (layer === 'sauce') {
      quantities.sauce += 0.2;
    } else if (layer === 'noodles') {
      quantities.noodles += 50;
    }
  }

  return quantities;
}

export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList[friendsList.length - 1]);
}

export const scaleRecipe = (recipe, portions) => {
  const scaledRecipe = {};

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * (portions * .5)
  }

  console.log(scaledRecipe)
  return scaledRecipe
}