'ALL_THE_USERS'

const getAllTheUsersReducer = (state = [], action) => {
	switch (action.type) {
		case 'ALL_THE_USERS':
			return action.payload;
		default:
			return state;
	}
};

export default getAllTheUsersReducer;