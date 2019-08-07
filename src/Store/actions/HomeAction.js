import axios from 'axios';

export function GET_HOMEDATA(){
	return (dispatch) => {
		return axios.get('https://5d230e064e05c600146efa7e.mockapi.io/mandala/products')
		.then(res => {
        	dispatch(fetchSuccess(res.data));
     	})
     	.catch(err => {
     		dispatch(fetchError(err));
		 })
	}
}

export function fetchSuccess(res) {
	return { type: 'HOME_OK', data: res}
}

export function fetchError(err) {
	return { type: 'HOME_ERROR', data: err}
}