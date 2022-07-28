import axios from "axios";
import { useEffect, useState } from "react";
const BookData = () => {
 let [id, setBookId] = useState('');
 let [bookDataToDisplay, setBookDataToDisplay] = useState('');

    const handleChange = (evt) => {
        setBookId(evt.target.value ); 
        setBookDataToDisplay({
            id: '',
            name: '',
            price: '',
            rating: '',
            authorId: '',
            categoryId: ''
        });
    }

    const getBookById = (evt) => {
        console.log(id);
        axios.get(`http://localhost:9999/user/get-book-by-id/${id}`)
            .then((response) => {
                setBookDataToDisplay(response.data);
                setBookId('');
            })
            .catch(() => {
                alert(`Book with BookId ${id} not found!`);
                setBookId('');
                setBookDataToDisplay({
                   id: '',
                   name: '',
                   price: '',
                   rating: '',
                   authorId: '',
                   categoryId: ''
                });
            });
        evt.preventDefault();
    }

    return (
        <div className="container">
            <div>
                <p className="display-4 text-primary py-3">BookData</p>
                <hr />
                <p className="lead">Search Book by Id</p>
                <div className="row pt-3">
                    <div className="col-3 md-auto px-3 pt-3 bg-white shadow">
                        <p className="lead text-info">Search Book:</p>
                        <form className="form form-group">
                            <input
                                className="form-control mb-3"
                                type="number"
                                id="id"
                                name="id"
                                value={id}
                                placeholder="Enter id"
                                onChange={handleChange}
                                autoFocus>
                            </input>
                            <input
                                className="form-control btn btn-outline-primary"
                                type="submit"
                                value="Search Book"
                                onClick={getBookById}>
                            </input>
                        </form>
                    </div>
                    <div className="col-4 ml-auto mr-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info">Book details:</p>
                        <hr />
                        <p>BookId: {bookDataToDisplay.bookId}</p>
                        <p>BookName: {bookDataToDisplay.bookName}</p>
                        <p>Price: {bookDataToDisplay.price}</p>
                        <p>Rating: {bookDataToDisplay.rating}</p>
                        <p>AuthorId: {bookDataToDisplay.authorId}</p>
                        <p>CategoryId: {bookDataToDisplay.categoryId}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookData;




















// import { useEffect, useState } from "react";
// import Author from "../models/Author";
// import Book from "../models/Book";
// import { getBookByIdService, getAllBooksService, addBookService } from "../services/BookService";
// const BookData = () => {

//   const[bookId, setBookId] = useState();
//   const[book, setBook] = useState(new Book());
//   const[bookToBeAdded, setBookToBeAdded] = useState(new Book());
//   const[author,setAuthor] = useState(new Author());
//   const[allBooks,setAllBooks] = useState();

//   useEffect(
//     () => {

//     }
//     , []);


//   const handleChange = (evt) => {
//     console.log(evt.target.name);
//     console.log(evt.target.value);
//     setBook(evt.target.value ); 
//   }

//   const submitGetBookById = (evt) => {
//     console.log(bookId);
//     evt.preventDefault(); 
//    // axios.get(`http://localhost:9988/user/get-book-by-id/${id}`);

//    getBookByIdService(bookId)
//    .then((response) => { 
//     console.log(response.data);
//    } )
//    .catch((error)  => {
//     alert(error);
//     setBook([]);
//    })

  
// const submitGetAllBooks = (evt) => {
//     evt.preventDefault();
//     getAllBooksService()
//         .then((response) => {
//             setAllBooks(response.data);
//             console.log(response.data);
//             console.log(allBooks);
//         })
//         .catch((error) => {
//             alert(error);
//             setAllBooks([]);
//         });
// }

// const handleAddBook = (e) => {
//     console.log(e.target.name);
//     console.log(e.target.value);
//     setBookToBeAdded({
//         ...bookToBeAdded,
//         [e.target.name]: e.target.value
//     });

//     setAuthor({
//         ...author,
//         [e.target.name]: e.target.value
//     });
// }


// const submitAddBook = (evt) => {
//     evt.preventDefault();
//     let bookTemp = { ...bookToBeAdded, author };
//     addBookService(bookTemp)
//         .then((response) => {
//             console.log(response.data);
//             alert(`Book with bookId ${response.data. bookId} added successfully.`);
//         })
//         .catch(() => {
//             setBookToBeAdded(new Book());
//             bookTemp = '';
//             alert("Book could not be added.");
//         });
// }

// return (
//     <div className="container">
//         <p className="display-4 text-primary py-3">BookData</p>
//         <hr />
//         <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-4">
//             <p className="lead">Add New Book</p>
//             <div className="form form-group" >
//                 <input
//                     type="text"
//                     id="bookName"
//                     name="bookName"
//                     className="form-control mb-3 mt-3"
//                     value={bookToBeAdded.bookName}
//                     onChange={handleAddBook}
//                     placeholder="Enter Book Name" />
//                 <input
//                     type="number"
//                     id="price"
//                     name="price"
//                     className="form-control mb-3 mt-3"
//                     value={bookToBeAdded.price}
//                     onChange={handleAddBook}
//                     placeholder="Enter price" />
//                      <input
//                         type="number"
//                         // id="author"
//                         // name="author"
//                         id="authorId"
//                         name="authorId"
//                         className="form-control mb-3 mt-3"
//                         value={author.authorId}
//                         onChange={handleAddBook}
//                         placeholder="Enter Author Id" />
//                     <input
//                         type="submit"
//                         className="btn btn-outline-primary form-control mb-3 mt-3"
//                         value="Add Author"
//                         onClick={submitAddBook}
//                     />
//                     </div>
//             </div>
//             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-4">
//                 <p className="lead">Find a Book</p>
//                 <div>
//                     <form className="form form-group">
//                         <input
//                             type="number"
//                             className="form-control mb-3 mt-3"
//                             id="bookId"
//                             value={bookId}
//                             placeholder="Enter book id"
//                             onChange={handleChange}
//                             autoFocus />
//                         <input type="submit" className="form-control mb-3 mt-3 btn btn-outline-primary" value="Get Employee" onClick={submitGetBookById} />
//                     </form>
//                 </div>
//                 <div> {(book.bookId) &&
//                     <div>
//                         <p className="lead text-primary">Book Details from State Object</p>
//                         <p> Book id: {book.bookId} </p>
//                         <p> Book name: {book.bookName} </p>
//                         <p> Price: {book.price} </p>
//                         {(book.author) &&
//                             <div>
//                                 <p> Author id: {book.author.authorId} </p>
//                                 <p> Author name: {book.author.authorName} </p>
//                             </div>
//                         }
//                     </div>
//                 }
//                  </div>
//             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
//                 <p className="lead">Get All Books</p>
//                 <div className="form form-group" >
//                     <input
//                         type="button"
//                         className="btn btn-outline-primary form-control mb-3 mt-3"
//                         value="Get All Books"
//                         onClick={submitGetAllBooks}
//                     />
//                 </div>
//                 <div>
//                     {/* this needs explanation  */}
//                     <div> {(allBooks) &&
//                         <div>
//                             <p className="text-primary text-center font-weight-bold lead">List of All Books</p>
//                             {
//                                 <table className="table">
//                                     <thead>
//                                         <tr>
//                                             <th>Boo Id</th>
//                                             <th>Book Name</th>
//                                             <th>Price</th>
//                                             <th>Author Id</th>
//                                             <th>Author Name</th>
                                           
//                                         </tr>
//                                     </thead>
//                                     {/* {allBooks.map((e =>
//                                         <tbody>
//                                             <tr>
//                                                 <td>{b.bookId}</td>
//                                                 <td>{b.bookName}</td>
//                                                 <td>{e.price}</td>
//                                                 {(b.author) &&
//                                                     <>
//                                                         <td>{b.author.authorId}</td>
//                                                         <td>{b.author.authorName}</td>
                                                    
//                                                     </>
//                                                 }
//                                             </tr>
//                                         </tbody>
//                                     ))} */}
//                                 </table>
//                             }
//                         </div>
//                     }
//                     </div>
//                 </div>
//             </div>
//         </div >
//         </div >
//     );
// }
// }

// export default BookData;