export const HOME_STATE = {
    id: 1,
    productName: "",
    price: 0,
    priceSale: 0,
    description: "",
    image: "",
    view: "",
    sell: ""
}

export default function homereducer(state = [], action) {
    switch (action.type) {
        case 'HOME_OK':
            state = [...action.data];
            return state;
        case 'HOME_ERROR':
            console.log("action error", action.data);
            return [...action.data];
        default:
            return [...state];
    }
}