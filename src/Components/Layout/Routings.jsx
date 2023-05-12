import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Learn from "../Pages/Learn";
import Login from "../Contents/Login";
import Register from "../Contents/Register";

const Routings =()=> {
    return (
        <div className="Routings">
            <Router>
                <Routes>
                    <Route path='/' element={ <Home/> }></Route>
                    <Route path='/learn' element={ <Learn/> }>
                    
                    </Route>

                    <Route path='/login' element={ <Login/> }></Route>
                    <Route path='/register' element={ <Register/> }></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Routings;