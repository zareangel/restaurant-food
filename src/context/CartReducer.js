export const cartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            const existingProduct = state.find(
                item => item.id === action.payload.id
            );
            if (existingProduct) {
                return state.map(item =>
                    item.id === action.payload.id ?
                        { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...state, { ...action.payload, quantity: 1 }];
        case "REMOVE_FROM_CART":
            return state.filter(item => item.id !== action.payload);
        case "CLEAR_CART":
            return [];
        case "INCREASE_QTY":
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        case "DECREASE_QTY":
            return state.map(item =>
                item.id === action.payload && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        default:
            return state;

    }

}