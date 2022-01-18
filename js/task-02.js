const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const vegetablesList = document.querySelector('#ingredients');

const vegetablesItem = ingredients.map((ingredient)=>{
      const newItem = document.createElement('li');
      newItem.textContent = ingredient;
      newItem.classList.add('item');
      return newItem;
});

vegetablesList.append(...vegetablesItem);