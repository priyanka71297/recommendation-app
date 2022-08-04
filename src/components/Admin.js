import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../models/Book";
import Author from "../models/Author";
import { addAuthorService } from "../services/AuthorService";

const Admin = () => {

    const [author, setAuthor] = useState(new Author());
    const [authorToBeAdded, setAuthorToBeAdded] = useState(new Author());


    useEffect(
        () => {

        }
        , []);

    const handleAddAuthor = (a) => {
        console.log(a.target.name);
        console.log(a.target.value);
        setAuthorToBeAdded({
            ...authorToBeAdded,
            [a.target.name]: a.target.value
        });

        setAuthor({
            ...author,
            [a.target.name]: a.target.value
        });
    }

    const submitAddAuthor = (evt) => {
        evt.preventDefault();
        let authorTemp = { ...authorToBeAdded, author };
        addAuthorService(authorTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Author with author name ${response.data.authorName} with authorId ${response.data.authorId} added successfully.`);
            })
            .catch(() => {
                setAuthorToBeAdded(new Author());
                authorTemp = '';
                alert("Author could not be added.");
            });
    }

    return (
        <div className="container">
            <p className="display-4 text-primary py-3">AuthorData</p>
            <hr />
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-4">
                <p className="lead">Add New Author</p>
                <div className="form form-group" >
                    <input
                        type="text"
                        id="authorName"
                        name="authorName"
                        className="form-control mb-3 mt-3"
                        value={authorToBeAdded.authorName}
                        onChange={handleAddAuthor}
                        placeholder="Enter Author Name" />

                    <input
                        type="submit"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Add Author"
                        onClick={submitAddAuthor}
                    />
                </div>
            </div>
        </div>
    );
}

export default Admin;
