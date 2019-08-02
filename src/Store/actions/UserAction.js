import axios from 'axios';

export function GET_USERDATA(){
	return (dispatch) => {
		return axios.get('https://5d230e064e05c600146efa7e.mockapi.io/mandala/users')
		.then(res => {
			dispatch(fetchUserSuccess(res.data));
		})
		.catch(err => {
			dispatch(fetchUserError(err));
		 })
	}
}

// export function EDIT_USERDATA(id, data){
// 	console.log(data)
// 	return (dispatch) => {
// 		return axios.put('https://5d230e064e05c600146efa7e.mockapi.io/mandala/user/'+id, data
// 			)
// 		.then(res => {
// 			dispatch(fetchUserSuccess(res.data));
// 		})
// 		.catch(err => {
// 			dispatch(fetchUserError(err));
// 		 })
// 	}
// }

export function fetchUserSuccess(res) {
	return { type: 'USER_OK', data: res}
}

export function fetchUserError(err) {
	return { type: 'USER_ERROR', data: err}
}

export function loadDataUsers(list) {
	return { type: 'LOAD_DATA_USERS', list }
}