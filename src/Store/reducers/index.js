import { combineReducers } from "redux";
import homereducer from "./homereducer";
import productsreducer from "./productsreducer";


export default combineReducers({
    homereducer,
    productsreducer
})
