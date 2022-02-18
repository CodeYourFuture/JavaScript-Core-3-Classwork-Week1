const tomatoes = 'tomatoes';
const chocolate= 'chocolate'yummy';
const yogurt = 'yogurt';
const rice = "rice";

const fridge =[{ item: tomatoes, quantity: 5},
         { item: chocolate, quantity: 1},
         { item: yogurt, quantity: 5}];

const wantedList = [{ item: tomatoes, quantity: 4},
  { item: chocolate, quantity: 10},
  { item: yogurt, quantity: 2}]

const shoppingList = (fridge, wantedList) => {
    return wantedList.map(groceryWantedList => { 
      let groceryFridge = fridge.find( gf => gf.item === groceryWantedList.item); 
      if  (groceryFridge===null){
        return groceryWantedList;
      } else {
        if (groceryFridge.quantity < groceryWantedList.quantity){
          return {
            item: groceryWantedList.item, 
            quantity: groceryWantedList.quantity - groceryFridge.quantity
          };
      } 
      else{ 
        return null;
      }
    }
  }).filter(item => item !== null);
};

shoppingList (fridge, wantedList).forEach( (item) => {
    console.log (`${item.item}: ${item.quantity}`);
  })