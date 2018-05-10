
import axios from 'axios';
import { extendObservable } from "mobx";



class BookStore{

    constructor() {
        extendObservable(this, {
            books: [],
            loading:true,
            base64Pages:[],
            images:[],
            TextPages:[],
           	BooksProcessing: 0,
           	currentBook:'',
           	pagesStored: false,
        })
    }

	fetchBooks(){
		return axios.get('http://139.59.208.148/api/list/')
			.then(res => res.data)
			.then(books => {
				this.books = books;
				this.loading = false;
			})
			.catch(err => console.error(err));
		}

	clearPages(){
		this.base64Pages = [];
	}

	addPage(base64){
		this.base64Pages.push(base64);
		//console.log(this.base64Pages);
	}

	createBook(book_name,book_description,user_id){
		//this.pagesStored = false;
	    return axios.post(
	      `http://139.59.208.148/api/create/`,
	      { book_name: book_name, book_description:book_description, cover_image:null, user:user_id},
	      )
	    .then(res => res.data)
	      .then((result) => {
	        console.log(result);
	        this.base64Pages.map(base64=>this.sendPage(result['id'],base64));
	        this.fetchBooks();
	      })
	      .catch(err => console.error('there is an error in the create book api: '+err));
    }

    sendPage(book_id,base64){
		//console.log({ book: book_id ,base64: base64, page_image:null, page_text:'.'});
	    return axios.post(
	      `http://139.59.208.148/api/page_create/`,
	      { book: book_id ,base64: base64, page_image:null, page_text:'.'},
	      // {headers: { 'content-type': 'multipart/form-data' }},
	      )
	    .then(res => res.data)
	      .then((result) => {
	      })
	      .catch(err => console.error('there is an error in the create page api: '+err));
    }

    getPagesOfBook(book_id){
		return axios.get('http://139.59.208.148/api/detail/'+book_id)
			.then(res => res.data)
			.then(data => {
				this.currentBook = data['book_name'];
				this.clearPages();
				data['pages'].map(page=>this.base64Pages.push(page['base64']));
				this.loading = false;
			})
			.catch(err => console.error(err));
		} 	
    
}




const bookStore = new BookStore()
bookStore.fetchBooks();
export default bookStore;

