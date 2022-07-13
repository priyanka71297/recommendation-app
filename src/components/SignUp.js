import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppUser from '../models/AppUser';

const SignUp = () => {

    const [appUser, setAppUser] = useState(new AppUser());

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitSignUp = (event) => {
        console.log(appUser);
        axios.post('http://localhost:9988/user/signup', appUser)
            .then((response) => {
                alert(`SignUp successful for ${response.data.userName}!`);
            })
            .catch((error) => {
                alert(`Something is wrong ${error.message}!`);
            });
        event.preventDefault();
    }

    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">SignUp</p>
            <hr />
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">SignUp</h1>
                <form className="form form-group form-dark " onSubmit={submitSignUp}>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={appUser.userName}
                            onChange={handleAppUser}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={appUser.password}
                            onChange={handleAppUser}
                            required
                        />
                        <div class="form-group">
                            <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="MANAGER">USER</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-outline-primary"
                            value="SignUp"
                            onClick={submitSignUp}
                        />
                    </div>
                </form>
            </div>
            <div className="py-3 ">
                <Link to="/SignIn" className="btn btn-outline-primary col-3">Have an account? Sign in</Link>
            </div>

        </div >
    )
}
export default SignUp;

