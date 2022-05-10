/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) return "Lasagna is done.";
  else if (!isNaN(remainingTime)) return "Not done, please wait.";
  return "You forgot to set the timer.";
}

export function preparationTime(layers, preparationTime = 2) {
  return layers.length * preparationTime;
}

export function quantities(layers) {
  function getCount(filter) {
    return layers.filter(layer => layer === filter).length;
  }

  return {
    noodles: getCount("noodles") * 50,
    sauce: getCount("sauce") * 0.2,
  };
}

export function addSecretIngredient(friendsIngredients, myIngredients) {
  myIngredients.push(friendsIngredients.at(-1));
}

export function scaleRecipe(recipe, portionsToCook = 2) {
  const DEFAULT_PORTION = 2;
  if (portionsToCook === DEFAULT_PORTION) return recipe;

  const finalRecipe = {};
  const scale = portionsToCook / DEFAULT_PORTION;
  for (let key of Object.keys(recipe)) {
    finalRecipe[key] = recipe[key] * scale;
  }

  return finalRecipe;
}
