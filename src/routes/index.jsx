import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../screens/home'
import User from '../screens/user'


const Routers = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<User/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}

export default Routers;