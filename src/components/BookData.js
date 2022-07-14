// const BookData = () => {

//     return(
//         <div>
//             <h1>BookData Component</h1>
//             <p>Welcome...</p>
//         </div>
//     );
// }
// export default BookData;

import { useEffect, useState } from "react";

const BookData = () => {

    let [book, setBook] = useState({});
    let [bookDataToDisplay, setBookDataToDisplay] = useState({});

    useEffect(() => {
        setBook({
            bookId: '',
            bookName: '',
            price: ''
        });
    }, []);

    const handleChange = (evt) => {
        console.log(evt.target.value);
        setBook({ ...book, [evt.target.name]: evt.target.value }); 
        setBookDataToDisplay({
            bookId: '',
            bookName: '',
            price: ''
        });
    }

    const submitData = (evt) => {
        console.log(evt.target.value);
        setBookDataToDisplay(book); 
        setBook({
            bookId: '',
            bookName: '',
            price: ''
        });
        evt.preventDefault(); 
    }

    return (
        <div className="container">
            <div>
                <p className="display-4 text-primary py-3">BookData</p>
                <hr />
                <div className="row py-3">
                    <div className="col-3 md-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info" >Please enter the data:</p>
                        <form className="form form-group">
                            <input
                                className="form-control"
                                type="number"
                                id="bookId"
                                name="bookId"
                                value={book.bookId}
                                placeholder="Enter bookid"
                                onChange={handleChange}
                                autoFocus>
                            </input>
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                id="bookName"
                                name="bookName"
                                value={book.bookName}
                                placeholder="Enter bookname"
                                onChange={handleChange} >
                            </input>
                            <br />
                            <input
                                className="form-control"
                                type="number"
                                id="price"
                                name="price"
                                value={book.price}
                                placeholder="Enter price"
                                onChange={handleChange} >
                            </input>
                            <br />
                            <input
                                className="form-control btn btn-outline-primary"
                                type="submit"
                                value="Submit"
                                onClick={submitData}>
                            </input>
                        </form>
                    </div>
                    <div className="col-4 ml-md-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info">Boook data as entered:</p>
                        <hr />
                        <p>BookId: {book.bookId}</p>
                        <p>Name: {book.bookName}</p>
                        <p>Price: {book.price}</p>
                    </div>

                    <div className="col-4 ml-md-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info">Book data after submit:</p>
                        <hr />
                        <p>BookId: {bookDataToDisplay.bookId}</p>
                        <p>Name: {bookDataToDisplay.bookName}</p>
                        <p>Price: {bookDataToDisplay.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookData;