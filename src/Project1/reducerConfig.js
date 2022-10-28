import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import animalReducer from "./animalReducer";
import valueReducer from "./valueReducer";
const combinedReducers = combineReducers({
	valueReducer,
	animalReducer,
});

export function configureStore() {
	return createStore(combinedReducers, applyMiddleware(thunk));
}
