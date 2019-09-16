const itemSelected = JSON.parse(localStorage.getItem('id-item--cart'));

export default function productSelected (state = itemSelected, action) {
    switch (action.type) {
        case "ADD_CART": {
            state = [...action.item];
            return state;
        }
        default:
            return state;
    }
};
