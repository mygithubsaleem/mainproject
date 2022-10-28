initialState = { newTestValue: 900 };
const TestReducer = (state, action) => {
	switch (action.type) {
		case "MYINCREMENT":
			return {
				newTestValue: state.newTestValue + action.type,
			};
		case "YOURDECREMENT":
			return {
				newTestValue: state.newTestValue - action.type,
			};
	}
};
export default TestReducer;
