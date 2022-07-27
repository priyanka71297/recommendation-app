import axios from 'axios';

// Create services for other components in this way. 

const springBootAppUrl = `http://localhost:9988/`;

const getBookByIdService = (bookId) => {
    console.log('getBookByIdService');
    return axios.get(`${springBootAppUrl}user/get-book-by-id/${bookId}`);
}
const getAllBooksService = () => {
    console.log(`getAllBooksService`);
    return axios.get(`${springBootAppUrl}user/get-all-books`);
}

const addBookService = (book) => {
    console.log(`addBookService`);
    return axios.post(`${springBootAppUrl}user/add-book`, book);
}

// add more functionalities here 

export { getBookByIdService, getAllBooksService, addBookService };
