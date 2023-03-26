const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
console.log(listEl);

const result = ingredients.map((item) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = item;
  return itemEl;
});

listEl.append(...result);
