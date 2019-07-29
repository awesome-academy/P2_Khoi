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