import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* getAllUsers(){
	try{
		const allUsers = yield axios.get('/api/user/all');
		yield put({ type: 'ALL_THE_USERS', payload: allUsers.data })
	}catch(error){
		console.log('error in getAllUsers saga:', error);
	}
	
}

function* getAllSaga() {
	yield takeLatest('GET_ALL', getAllUsers);
}

export default getAllSaga;