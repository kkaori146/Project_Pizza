const c = (el) => document.querySelector(el);
const css = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
let pizzaItem = c('.models.pizza-item').cloneNode(true);
//Preencher as informações em pizzaitem

pizzaItem.querySelector('.pizza-item--name').innerHTML = iteam.name;
c('.pizza-area').append(pizzaItem);

});