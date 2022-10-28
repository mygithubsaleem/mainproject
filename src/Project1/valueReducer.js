const initialState = { value: 0 };

const valueReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INC":
			// console.log(action);
			return {
				value: state.value + action.payload,
			};
		case "DEC":
			// console.log(action);

			return {
				value: state.value - action.payload,
			};

		default:
			return state;
	}
};
export default valueReducer;
