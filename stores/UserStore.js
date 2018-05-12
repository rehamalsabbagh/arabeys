
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { extendObservable } from "mobx";


class UserStore{

    constructor() {
        extendObservable(this, {
            token:'',
            username:'',
            user: {},
            loading: true,
        })
    }


    logout(){
    	this.token = '';
    	this.username = '';
    }

	login(username,password){
		return axios.post('http://139.59.208.148/api/login/',{username:username,password:password})
		.then(res => res.data)
			.then(data => {
				this.loading = false;
				this.username = data['username'];
				this.token = data['token'];
				this.user = jwt_decode(data.token);
				console.log(this.user);
			})
			.catch(err => alert('Your username or password is wrong'));
	}
	signup(username,password){
		return axios.post('http://139.59.208.148/api/register/',{username:username,password:password})
			.then(res => res.data)
			.then(data => {
				this.loading = false;
				this.login(username,password);
				// this.username = data['username'];
				// this.token = data['token'];
				// this.user = jwt_decode(data.token);
				// console.log(this.user);
			})
			.catch(err => console.error(err));
	}
	
    
}




const userStore = new UserStore()
export default userStore;

