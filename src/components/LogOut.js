import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logoutUser } from "../redux/AppUserSlice";
import { logoutService } from "../services/AppUserService";

const Logout = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(store => store.appUser.currentUser);

    const submitLogout = () => {
        logoutService(currentUser);
        dispatch(logoutUser());
        history.push("/");
    }
    return (
        <div className="modal fade" id="logoutModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Logout!</h5>
                        <button type="button" className="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure to logout?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">No</button>
                        <button type="button" className="btn btn-outline-primary" data-dismiss="modal" onClick={submitLogout}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Logout;
