
import axios from 'axios';
import { extendObservable } from "mobx";



class BookStore{

    constructor() {
        extendObservable(this, {
            books: [
		{
			name: 'طعام، صلاة، حب',
			description: '.....',
			author: 'Someone',
			cover: 'https://www.sheridanmedia.com/files/imagecache/250px/image/Cover.EatPrayLove.jpg',
		},
		{
			name: 'طعام، صلاة، حب',
			description: '.....',
			author: 'Someone',
			cover: 'https://www.sheridanmedia.com/files/imagecache/250px/image/Cover.EatPrayLove.jpg',
		}
		],
            loader:true,
        })
    }

	fetchBooks(){
		return axios.get('http://138.197.187.34/api/list/')
			.then(res => res.data)
			.then(books => {
				this.books = books;
				this.loading = false;
			})
			.catch(err => console.error(err));
		}

	}



const bookStore = new BookStore()
bookStore.fetchBooks();
export default bookStore;