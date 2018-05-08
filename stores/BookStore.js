
import axios from 'axios';
import { extendObservable } from "mobx";



class BookStore{

    constructor() {
        extendObservable(this, {
            books: [],
            loader:true,
            base64Pages:[],
            images:[],
            TextPages:[],
           	BooksProcessing: 0,
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

	clearPages(){
		this.base64Pages = [];
	}

	addPage(base64){
		this.base64Pages.push(base64);
		//console.log(this.base64Pages);
	}

	createBook(book_name,book_description){
	    return axios.post(
	      `http://138.197.187.34/api/create/`,
	      { book_name: book_name, book_description:book_description, cover_image:null},
	      )
	    .then(res => res.data)
	      .then((result) => {
	        console.log(result)
	        this.BooksProcessing++;
	        this.base64Pages.map(base64=>this.sendPage(result['id'],base64))
	      })
	      .catch(err => console.error('there is an error in the create book api: '+err));
    }

    sendPage(book_id,base64){

		//console.log({ book: book_id ,base64: base64, page_image:null, page_text:'.'});
	    return axios.post(
	      `http://138.197.187.34/api/page_create/`,
	      { book: book_id ,base64: base64, page_image:null, page_text:'.'},
	      // {headers: { 'content-type': 'multipart/form-data' }},
	      )
	    .then(res => res.data)
	      .then((result) => {
	        console.log('WORKED!!!! '+result)
	        //this.BooksProcessing--;
	      })
	      .catch(err => console.error('there is an error in the create page api: '+err));


    // Aziz: Try to avoid committing dead code

		//   let apiUrl = 'http://192.168.100.172/api/page_create/';

		//   // Note:
		//   // Uncomment this if you want to experiment with local server
		//   //
		//   // if (Constants.isDevice) {
		//   //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
		//   // } else {
		//   //   apiUrl = `http://localhost:3000/upload`
		//   // }

		//   let uriParts = uri.split('.');
		//   let fileType = uriParts[uriParts.length - 1];

		//   let formData = new FormData();
		//   formData.append('page_image', {
		//     uri,
		//     name: `hi.${fileType}`,
		//     type: `image/${fileType}`,
		//   });

		//   formData.append('book', book_id);

		//   let options = {
		//     method: 'POST',
		//     body: formData,
		//     headers: {
		//       Accept: 'application/json',
		//       'Content-Type': 'multipart/form-data',
		//     },
		//   };

		//   return axios.post(apiUrl, formData, {
		//   	headers: {
		//       'Content-Type': 'multipart/form-data'
		//   }
		// }).then((result) => {
	 //        console.log('it worked! '+result.data)
	 //        //this.BooksProcessing--;
	 //      })
	 //      .catch(err => console.error('there is an error in the create page api: '+err));

		 // return fetch(apiUrl, options)
	  //   .then(res => res.data)
	  //     .then((result) => {
	  //       console.log('it worked! '+result)
	  //       //this.BooksProcessing--;
	  //     })
	  //     .catch(err => console.error('there is an error in the create page api: '+err));

    }
}




const bookStore = new BookStore()
bookStore.fetchBooks();
export default bookStore;
