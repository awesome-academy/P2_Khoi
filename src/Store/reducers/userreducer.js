export default function userreducer(state = [], action) {
	switch (action.type) {
		case 'USER_OK':
			state = [...action.data];
			return state;
		case 'USER_ERROR':
			state = [...action.data];
			return state;
		default:
			return [...state];
	}
}