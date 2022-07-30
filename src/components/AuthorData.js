
import axios from "axios";
import { useEffect, useState } from "react";

const AuthorData = () => {
 let [id, setAuthorId] = useState('');
 let [authorDataToDisplay, setAuthorDataToDisplay] = useState('');

    const handleChange = (evt) => {
        setAuthorId(evt.target.value ); 
        setAuthorDataToDisplay({
            id: '',
            name: ''
        });
    }

    const getAuthorById = (evt) => {
        console.log(id);
        axios.get(`http://localhost:9999/user/get-author-by-id/${id}`)
            .then((response) => {
                setAuthorDataToDisplay(response.data);
                setAuthorId('');
            })
            .catch(() => {
                alert(`Author with AuthorId ${id} not found!`);
                setAuthorId('');
                setAuthorDataToDisplay({
                   id: '',
                   name: ''
                });
            });
        evt.preventDefault();
    }

    return (
        <div className="container">
            <div>
                <p className="display-4 text-primary py-3">AuthorData</p>
                <hr />
                <p className="lead">Search Author by Id</p>
                <div className="row pt-3">
                    <div className="col-3 md-auto px-3 pt-3 bg-white shadow">
                        <p className="lead text-info">Search Author:</p>
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
                                value="Search Author"
                                onClick={getAuthorById}>
                            </input>
                        </form>
                    </div>
                    <div className="col-4 ml-auto mr-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info">Author details:</p>
                        <hr />
                        <p>AuthorId: {authorDataToDisplay.authorId}</p>
                        <p>AuthorName: {authorDataToDisplay.authorName}</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorData;




