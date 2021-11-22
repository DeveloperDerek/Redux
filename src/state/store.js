import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk"

export const store = createStore(
    reducers, // reducers
    {}, // default state
    applyMiddleware(thunk) // thunk midleware to help use asynch requests
)