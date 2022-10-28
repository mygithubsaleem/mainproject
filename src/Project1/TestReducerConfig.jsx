import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const combinedReducer = combinedReducer({
	animalReducer,
	valueReducer,
	newTestReducer,
});

export function configStore() {
	return createStore(combinedReducer, applyMiddleware(thunk));
}
