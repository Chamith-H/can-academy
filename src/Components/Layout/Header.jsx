import "../../Styles/Layout/Header.css"

import Logo from "../../Assets/Images/Icons/Logo.png"
import NavLinks from "../Contents/NavLinks";

const Header =()=> {
    return (
        <div className="Header px-5 sticky-top">
            <div className="Align-Header px-5">
                <div className="Header-Brand">
                    <img src={Logo} alt="" />
                </div>

                <div className="Header-Actions">
                <div className="Navigations-Desktop">
                    <NavLinks/>
                </div>

                <div className="Account">
                    <i class="bi bi-person-fill"></i>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;