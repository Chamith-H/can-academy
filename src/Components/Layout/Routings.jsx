import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Learn from "../Pages/Learn";

const Routings =()=> {
    return (
        <div className="Routings">
            <Router>
                <Routes>
                    <Route path='/' element={ <Home/> }></Route>

                    <Route path='/learn' element={ <Learn/> }>
                        
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Routings;