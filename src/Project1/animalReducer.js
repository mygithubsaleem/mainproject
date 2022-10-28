const initialState = { animals: [] };

const animalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_ANIMALS":
			return { animals: action.payload };
		case "CLEAR_ANIMALS":
			return { animals: [] };
		case "ADD_ANIMAL":
			return { animals: action.payload };
		case "DELETE_ANIMAL":
			return { animals: action.payload };
		case "EDIT_ANIMAL":
			return { animals: action.payload };
		case "UPDATE_ANIMAL":
			return { animals: action.payload };
		default:
			return state;
	}
};
export default animalReducer;
