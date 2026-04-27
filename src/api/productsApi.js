const products = [

  // 🍔 HAMBURGUESAS (12)
 { id: 1, name: "Classic Burger", description: "Beef + lettuce", price: 12, image: "https://images.unsplash.com/photo-1550547660-d9450f859349", category: { id: 1, name: "Burgers" } },

{ id: 2, name: "Double Beef Burger", description: "Double beef + cheese", price: 15, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", category: { id: 1, name: "Burgers" } },

{ id: 3, name: "Bacon Burger", description: "With crispy bacon", price: 16, image: "https://images.unsplash.com/photo-1550317138-10000687a72b", category: { id: 1, name: "Burgers" } },

{ id: 4, name: "Cheese Burger", description: "Extra cheese", price: 14, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086", category: { id: 1, name: "Burgers" } },


{ id: 13, name: "Coca-Cola", description: "500ml soft drink", price: 5, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a", category: { id: 2, name: "Drinks" } },

{ id: 14, name: "Inca Kola", description: "500ml soft drink", price: 5, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87", category: { id: 2, name: "Drinks" } },

{ id: 15, name: "Pepsi", description: "500ml soft drink", price: 5, image: "https://media.falabella.com/tottusPE/43354126_1/w=1500,h=1500,fit=cover", category: { id: 2, name: "Drinks" } },

{ id: 16, name: "Sprite", description: "500ml soft drink", price: 5, image: "https://gharstuff.com/wp-content/uploads/2018/12/Sprite-Soft-Drink-Can-300ml.jpg", category: { id: 2, name: "Drinks" } },


// 🍟 COMBOS
{ id: 25, name: "Classic Combo", description: "Burger + fries + soda", price: 20, image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330", category: { id: 3, name: "Combos" } },

{ id: 26, name: "Double Combo", description: "Double beef burger + fries", price: 25, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b", category: { id: 3, name: "Combos" } },

{ id: 27, name: "Family Combo", description: "4 burgers + fries", price: 50, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", category: { id: 3, name: "Combos" } },

{ id: 28, name: "BBQ Combo", description: "BBQ burger + fries", price: 23, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPupdPPTWaexFbcZrsABtmQIDR7KtU-tM5KQ&s", category: { id: 3, name: "Combos" } },
];

export const getProducts = async () => {
  return products;
};