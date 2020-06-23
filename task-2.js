'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const allIngredients = document.querySelector('#ingredients');
  function createList(ingredient) {
      const liItem = document.createElement('li');
      liItem.textContent = ingredient;
      return liItem;
  }
  const array = ingredients.map(liItem => createList(liItem));
  allIngredients.append(...array);