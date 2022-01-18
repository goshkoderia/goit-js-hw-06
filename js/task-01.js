const categoriesRef = document.querySelectorAll('.item');

console.log(`Number of Categories ${categoriesRef.length}`);

const arrayOfCategories = [...categoriesRef];

for (const item of arrayOfCategories){
   const liLength = item.lastElementChild.children.length;
   console.log(`categories: ${item.firstElementChild.textContent}:${liLength}`);

}