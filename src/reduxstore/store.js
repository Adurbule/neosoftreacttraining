import { createStore,applyMiddleware } from "redux";
import dmart from "./reducers"
import {Logger} from "./middlewares"

var fistMiddleware = applyMiddleware(Logger)
export default createStore(dmart)
// var store = createStore(dmart);

// store.dispatch({
//     type:"login"
// })
// console.log("............",store.getState());

// store.dispatch({
//     type:"LOGIN",
//     payload:{email:"arpitadurbule1019@gmail.com",name:"Arpita"}
// })
// console.log("After Loing Done >>> ",store.getState());

// export default store