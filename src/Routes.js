import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookData from './components/BookData';
import SignIn from './components/SignIn';

const Routes = () => {

    return (
        <div className="container-fluid">
            <p>Routes Component</p>
            <div>
                <BrowserRouter>
                <Switch>
                    <Route path='/bookdata'> <BookData/> </Route>
                    <Route path='/signin'> <SignIn/> </Route>
                </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Routes;
// const Routes = () => {

//         return (
//             <div className="container-fluid">
//                 <p>Routes Component</p>
//                     {/* base url - http://localhost:3000/
    
//                 http://localhost:3000/home
//                 http://localhost:3000/signin
//                 http://localhost:3000/bookdata
    
//                 if /login then display login component
//                 if /empdata then display empData component
//                 if /parent then display parent component
//                */}

//              </div >
//         );
//     }
    
//     export default Routes;