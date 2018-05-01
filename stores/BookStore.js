
import axios from 'axios';
import { extendObservable } from "mobx";



class BookStore{

    constructor() {
        extendObservable(this, {
            books: [
		{
			name: 'Eat Pray Love',
			description: 'bla bla bla',
			author: 'Someone',
			cover: 'eatpraylove.png',
		},
		{
			name: 'Eat Pray Love',
			description: 'bla bla bla',
			author: 'Someone',
			cover: 'eatpraylove.png',
		}
		],
            loader:true,
        })
    }

	fetchBooks(){
		// RAKAN's CODE, DON'T MESS WITH IT !!!!!!
		// return axios.get('https:ifteraaad/'){
		// 	.then(res => res.data)
		// 	.then(books => {
		// 		this.books = books;
		// 		this.loading = false;
		// 	})
		// 	.catch(err => console.error(err));
		// }

	}

}

const bookStore = new BookStore()

export default bookStore;